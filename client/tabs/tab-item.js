import {Behavior} from 'aurelia-framework';

export class TabItem {
  static metadata(){
    return Behavior
      .customElement('tab-item')
      .withProperty('title');
  }

  constructor(){
    this.isSelected = false;
  }
}