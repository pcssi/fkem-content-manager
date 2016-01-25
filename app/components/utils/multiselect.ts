import { Input, Output, Component, EventEmitter } from 'angular2/core';

/*
 * Multi select dropdown for Angular 2 by @danfickle.
 * Based loosely on angular 1 multi select by @dotansimha (http://dotansimha.github.io/angularjs-dropdown-multiselect/)
 * Known to work with Angular 2.0.0-beta.0
 * Edited by @RMBdev to work with string arrays
 */

@Component({
  selector: 'multi-select-dropdown',
  template: `
    <div class="multiselect-parent btn-group dropdown-multiselect">
      <button type="button" class="dropdown-toggle btn btn-default" (click)="toggleDropdown()">
        <span *ngIf="selectionModel.length == 0">No selected items</span>
        <span *ngIf="selectionModel.length != 0">Selected Items:</span>
        {{ getButtonText() }}&nbsp;<span class="caret"></span>
      </button>
      <ul class="dropdown-menu dropdown-menu-form" [style.display]="isOpen ? 'block' : 'none'" style="overflow: scroll" >
        <li><a href="#" (click)="deselectAll($event);"><span class="glyphicon glyphicon-remove"></span>&nbsp;Clear All</a></li>
        <li><div class="dropdown-header">
          <div class="control-group"><div class="input-group">
            <input type="text" class="form-control" [(ngModel)]="searchFilter" placeholder="Search" />
            <span class="glyphicon glyphicon-remove input-group-addon" (click)="clearSearch()"></span>
          </div></div>
          </div></li>
        <template ngFor #item [ngForOf]="items">
        <li role="presentation" *ngIf="searchFilter == '' || isShowItem(item)">
          <a href="#" role="menuitem" (click)="toggleSelectedItem($event, item)">
            <span class="glyphicon" [class.glyphicon-ok]="isChecked(item)"></span>
            {{item}}
          </a>
        </li>
        </template>
        <li *ngIf="items.length == 0">No items</li>
      </ul>
    </div>
  `
})
export default class MutliSelectDropdownComponent {
  @Input() selectionModel: Array<string>;
  @Input() items: Array<string>;
  @Output() selectionModelChange: EventEmitter<Array<string>> = new EventEmitter();
  isOpen: boolean = false;
  searchFilter: string = '';

  toggleDropdown() : void {
    this.isOpen = !this.isOpen;
  }

  clearSearch() : void {
    this.searchFilter = '';
  }

  isShowItem(txt: string) : boolean {
    return txt.toLowerCase().indexOf(this.searchFilter.toLowerCase()) >= 0;
  }

  deselectAll(ev: Event) : void {
    this.selectionModel = [];
    this.clearSearch();
    this.onUpdate();
    ev.preventDefault();
  }

  isChecked(name: string) : boolean {
    return this.selectionModel.findIndex((itm) => itm == name) >= 0;
  }

  onUpdate() : void {
    this.selectionModelChange.emit(this.selectionModel);
  }

  toggleSelectedItem(ev: Event, name: string) : void {
    const idx = this.selectionModel.findIndex((itm) => itm == name);

    if (idx >= 0) {
      this.selectionModel.splice(idx, 1);
    }
    else {
      this.selectionModel.push(name);
    }

    this.onUpdate();
    ev.preventDefault();
  }

  getButtonText(): string {
    const selectedTexts: Array<string> =
      this.items
          .filter((itm) => this.isChecked(itm));

    return selectedTexts.join(', ');
  }
}