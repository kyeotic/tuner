import {Behavior} from 'aurelia-framework';

export class TabControl {
  static metadata(){
    return Behavior
      .customElement('tab-control')
      .syncChildren('items', 'itemsChanged', 'tab-item');
  }

  constructor(){
    this.items = [];
    this.selectedItem = null;
  }

  itemsChanged(mutations){
    if(this.items.length > 0){
      if(!this.selectedItem || this.items.indexOf(this.selectedItem) === -1){
        this.selectItem(this.items[0]);
      }
    }
  }

  selectItem(item){
    if(this.selectedItem){
      this.selectedItem.isSelected = false;
    }

    this.selectedItem = item;

    if(this.selectedItem){
      this.selectedItem.isSelected = true;
    }
  }
}