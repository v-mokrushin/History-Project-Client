import { makeAutoObservable, toJS } from "mobx";
import { WEAPONS_TYPE_METHODS } from "constants/weapon-types";

export class FiltersStore {
  public filters: any;

  constructor() {
    this.filters = {};
    makeAutoObservable(this);
  }

  getFilters() {
    return toJS(this.filters);
  }

  setType(type: object): void {
    if (WEAPONS_TYPE_METHODS.isAllType(type)) {
      delete this.filters.type;
      this.filters = { ...this.filters };
    } else {
      this.filters = { ...this.filters, type };
    }
  }

  setDeveloper(developer: any): void {
    if (developer.name.russian == "Все") {
      delete this.filters.developer;
      this.filters = { ...this.filters };
    } else {
      this.filters = { ...this.filters, developer };
    }
  }

  setNameFilter(name: string): void {
    this.filters = { ...this.filters, name };
  }

  cancelFilters(): void {
    this.filters = {};
  }

  get name(): string {
    return this.filters.name;
  }

  get typeName(): string {
    return this.filters.type?.name?.russian;
  }

  get developerName(): string {
    return this.filters.developer?.name?.russian;
  }

  isEmpty(): boolean {
    return Object.keys(this.filters).length === 0;
  }
}

const filtersStore = new FiltersStore();
export default filtersStore;
