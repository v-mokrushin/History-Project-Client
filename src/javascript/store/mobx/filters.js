import { action, makeObservable, observable, toJS } from "mobx";
import { WEAPONS_TYPE } from "../../constants/weapons";

export class FiltersStore {
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

  setFilter(object) {
    this.filters = object;
  }

  cancelFilters() {
    this.filters = {};
  }

  isEmpty() {
    return Object.keys(this.filters).length === 0;
  }
}

const filtersStore = new FiltersStore();
export default filtersStore;
