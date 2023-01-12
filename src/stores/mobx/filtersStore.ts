import { makeAutoObservable, toJS } from "mobx";

export type TFilters = {
  name?: string;
  type?: string;
  developer?: string;
};

export class FiltersStore {
  public filters: TFilters;

  constructor() {
    this.filters = {};
    makeAutoObservable(this);
  }

  getFilters() {
    return toJS(this.filters);
  }

  setType(type: string): void {
    if (type == "Все") {
      delete this.filters.type;
      this.filters = { ...this.filters };
    } else {
      this.filters = { ...this.filters, type };
    }
  }

  setDeveloper(developer: string): void {
    if (developer == "Все") {
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

  get name(): string | undefined {
    return this.filters.name;
  }

  get typeName(): string | undefined {
    return this.filters.type;
  }

  get developerName(): string | undefined {
    return this.filters.developer;
  }

  isEmpty(): boolean {
    return Object.keys(this.filters).length === 0;
  }
}

const filtersStore = new FiltersStore();
export default filtersStore;
