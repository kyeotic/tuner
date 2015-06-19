import {customElement, bindable} from 'aurelia-framework';

@customElement('tab-item')
@bindable('title')
export class TabItem {

  constructor(){
    this.isSelected = false;
  }
}