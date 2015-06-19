import {customElement, syncChildren, bindable} from 'aurelia-framework';

@customElement('tab-control')
@syncChildren('items', 'itemsChanged', 'tab-item')
export class TabControl {

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