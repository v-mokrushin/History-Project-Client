import { WEAPONS_DATA } from "./../../data/weapons/weapons";
import { makeAutoObservable, toJS } from "mobx";

export class FiltersStore {
  public filters: any;
  public colorized: boolean;
  public sortInAscending: boolean;

  constructor() {
    this.filters = {};
    this.colorized = false;
    this.sortInAscending = false;

    makeAutoObservable(this);
  }

  getFilters() {
    return toJS(this.filters);
  }

  setFilter(filters: object): void {
    this.filters = filters;
  }

  cancelFilters(): void {
    this.filters = {};
  }

  isEmpty(): boolean {
    return Object.keys(this.filters).length === 0;
  }

  toggleSortInAscending(): void {
    this.sortInAscending = !this.sortInAscending;
    // console.log(this.yearSortion);
  }

  changeColorized(): void {
    WEAPONS_DATA.changeColorized();
    this.colorized = !this.colorized;
  }
}

const filtersStore = new FiltersStore();
export default filtersStore;
