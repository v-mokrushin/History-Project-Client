import { makeAutoObservable, toJS } from "mobx";

export type TFilters = {
  name?: string;
  type?: string;
  nation?: string;
  developer?: string;
  chiefDesigner?: string;
  platform?: string;
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

  cancelFilters(): void {
    this.filters = {};
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

  setNation(nation: string): void {
    if (nation == "Весь мир") {
      delete this.filters.nation;
      this.filters = { ...this.filters };
    } else {
      this.filters = { ...this.filters, nation };
    }
  }

  setChiefDesigner(chiefDesigner: string): void {
    if (chiefDesigner == "Все") {
      delete this.filters.chiefDesigner;
      this.filters = { ...this.filters };
    } else {
      this.filters = { ...this.filters, chiefDesigner };
    }
  }

  setPlatform(platform: string): void {
    if (platform == "Все") {
      delete this.filters.platform;
      this.filters = { ...this.filters };
    } else {
      this.filters = { ...this.filters, platform };
    }
  }

  setNameFilter(name: string): void {
    this.filters = { ...this.filters, name };
  }

  get nation(): string | undefined {
    return this.filters.nation;
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

  get chiefDesigner(): string | undefined {
    return this.filters.chiefDesigner;
  }

  get platform(): string | undefined {
    return this.filters.platform;
  }

  isEmpty(): boolean {
    return Object.keys(this.filters).length === 0;
  }
}

const filtersStore = new FiltersStore();
export default filtersStore;
