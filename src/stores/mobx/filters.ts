import { WEAPONS_DATA } from "./../../data/weapons/weapons";
import { makeAutoObservable, toJS } from "mobx";
import { WEAPONS_TYPE_METHODS } from "constants/weapons";

export class FiltersStore {
  public filters: any;

  constructor() {
    this.filters = {};
    makeAutoObservable(this);
  }

  getFilters() {
    return toJS(this.filters);
  }

  setTypeFilter(type: object): void {
    if (WEAPONS_TYPE_METHODS.isAllType(type)) {
      delete this.filters.type;
      this.filters = { ...this.filters };
    } else this.filters = { ...this.filters, type };
  }

  setNameFilter(name: string): void {
    this.filters = { ...this.filters, name };
  }

  cancelFilters(): void {
    this.filters = {};
  }

  get name() {
    return this.filters.name;
  }

  isEmpty(): boolean {
    return Object.keys(this.filters).length === 0;
  }
}

const filtersStore = new FiltersStore();
export default filtersStore;
