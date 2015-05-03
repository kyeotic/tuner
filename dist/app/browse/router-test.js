System.register(['aurelia-dependency-injection', 'aurelia-history', './router', './pipeline-provider', './navigation-commands', 'aurelia-event-aggregator'], function (_export) {
  var Container, History, Router, PipelineProvider, isNavigationCommand, EventAggregator, AppRouter;

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

  function findAnchor(el) {
    while (el) {
      if (el.tagName === 'A') {
        return el;
      }el = el.parentNode;
    }
  }

  function handleLinkClick(evt) {
    if (!this.isActive) {
      return;
    }

    var target = findAnchor(evt.target);
    if (!target) {
      return;
    }

    if (this.history._hasPushState) {
      if (!evt.altKey && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && targetIsThisWindow(target)) {
        var href = target.getAttribute('href');

        if (href !== null && !(href.charAt(0) === '#' || /^[a-z]+:/i.test(href))) {
          evt.preventDefault();
          this.history.navigate(href);
        }
      }
    }
  }

  function targetIsThisWindow(target) {
    var targetWindow = target.getAttribute('target');

    return !targetWindow || targetWindow === window.name || targetWindow === '_self' || targetWindow === 'top' && window === window.top;
  }
  return {
    setters: [function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaHistory) {
      History = _aureliaHistory.History;
    }, function (_router) {
      Router = _router.Router;
    }, function (_pipelineProvider) {
      PipelineProvider = _pipelineProvider.PipelineProvider;
    }, function (_navigationCommands) {
      isNavigationCommand = _navigationCommands.isNavigationCommand;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      'use strict';

      AppRouter = (function (_Router) {
        function AppRouter(container, history, pipelineProvider, events) {
          _classCallCheck(this, AppRouter);

          _get(Object.getPrototypeOf(AppRouter.prototype), 'constructor', this).call(this, container, history);
          this.pipelineProvider = pipelineProvider;
          document.addEventListener('click', handleLinkClick.bind(this), true);
          this.events = events;
        }

        _inherits(AppRouter, _Router);

        _createClass(AppRouter, [{
          key: 'isRoot',
          get: function () {
            return true;
          }
        }, {
          key: 'loadUrl',
          value: function loadUrl(url) {
            var _this2 = this;

            return this.createNavigationInstruction(url).then(function (instruction) {
              return _this2.queueInstruction(instruction);
            })['catch'](function (error) {
              console.error(error);

              if (_this2.history.previousFragment) {
                _this2.navigate(_this2.history.previousFragment, false);
              }
            });
          }
        }, {
          key: 'queueInstruction',
          value: function queueInstruction(instruction) {
            var _this3 = this;

            return new Promise(function (resolve) {
              instruction.resolve = resolve;
              _this3.queue.unshift(instruction);
              _this3.dequeueInstruction();
            });
          }
        }, {
          key: 'dequeueInstruction',
          value: function dequeueInstruction() {
            var _this4 = this;

            if (this.isNavigating) {
              return;
            }

            var instruction = this.queue.shift();
            this.queue = [];

            if (!instruction) {
              return;
            }

            this.isNavigating = true;
            this.events.publish('router:navigation:processing', instruction);

            var context = this.createNavigationContext(instruction);
            var pipeline = this.pipelineProvider.createPipeline(context);

            pipeline.run(context).then(function (result) {
              _this4.isNavigating = false;

              if (result.completed) {
                _this4.history.previousFragment = instruction.fragment;
              }

              if (result.output instanceof Error) {
                console.error(result.output);
                _this4.events.publish('router:navigation:error', { instruction: instruction, result: result });
              }

              if (isNavigationCommand(result.output)) {
                result.output.navigate(_this4);
              } else if (!result.completed) {
                _this4.navigate(_this4.history.previousFragment || '', false);
                _this4.events.publish('router:navigation:cancelled', instruction);
              }

              instruction.resolve(result);
              _this4.dequeueInstruction();
            }).then(function (result) {
              return _this4.events.publish('router:navigation:complete', instruction);
            })['catch'](function (error) {
              console.error(error);
            });
          }
        }, {
          key: 'registerViewPort',
          value: function registerViewPort(viewPort, name) {
            var _this5 = this;

            _get(Object.getPrototypeOf(AppRouter.prototype), 'registerViewPort', this).call(this, viewPort, name);

            if (!this.isActive) {
              if ('configureRouter' in this.container.viewModel) {
                var result = this.container.viewModel.configureRouter() || Promise.resolve();
                return result.then(function () {
                  return _this5.activate();
                });
              } else {
                this.activate();
              }
            } else {
              this.dequeueInstruction();
            }
          }
        }, {
          key: 'activate',
          value: function activate(options) {
            if (this.isActive) {
              return;
            }

            this.isActive = true;
            this.options = Object.assign({ routeHandler: this.loadUrl.bind(this) }, this.options, options);
            this.history.activate(this.options);
            this.dequeueInstruction();
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.isActive = false;
            this.history.deactivate();
          }
        }, {
          key: 'reset',
          value: function reset() {
            _get(Object.getPrototypeOf(AppRouter.prototype), 'reset', this).call(this);
            this.queue = [];
            this.options = null;
          }
        }], [{
          key: 'inject',
          value: function inject() {
            return [Container, History, PipelineProvider, EventAggregator];
          }
        }]);

        return AppRouter;
      })(Router);

      _export('AppRouter', AppRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFHLGlCQUFpQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDO0FBQy9DLG9CQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDN0UsdUJBQU8sTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFBTSxPQUFLLFFBQVEsRUFBRTtpQkFBQSxDQUFDLENBQUM7ZUFDM0MsTUFBSTtBQUNILG9CQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7ZUFDakI7YUFDRixNQUFNO0FBQ0wsa0JBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQzNCO1dBQ0Y7OztpQkFFTyxrQkFBQyxPQUFPLEVBQUU7QUFDaEIsZ0JBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNqQixxQkFBTzthQUNSOztBQUVELGdCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixnQkFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvRixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BDLGdCQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztXQUMzQjs7O2lCQUVTLHNCQUFHO0FBQ1gsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGdCQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1dBQzNCOzs7aUJBRUksaUJBQUc7QUFDTix1Q0EvR1MsU0FBUyx1Q0ErR0o7QUFDZCxnQkFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1dBQ3JCOzs7aUJBakhZLGtCQUFFO0FBQUUsbUJBQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1dBQUU7OztlQUR2RSxTQUFTO1NBQVMsTUFBTTs7MkJBQXhCLFNBQVMiLCJmaWxlIjoiYnJvd3NlL3JvdXRlci10ZXN0LmpzIiwic291cmNlUm9vdCI6Ii4uL2NsaWVudC8ifQ==