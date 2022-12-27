import { action, makeObservable, observable, toJS } from "mobx";
import { WEAPONS_TYPE } from "../../../constants/weapons";

export class FiltersStore {
  public filters: any;

  constructor() {
    this.filters = {};

    makeObservable(this, {
      filters: observable,
      setFilter: action,
      isEmpty: action,
    });
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
}

const filtersStore = new FiltersStore();
export default filtersStore;
