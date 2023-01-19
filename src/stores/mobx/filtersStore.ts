import { makeAutoObservable, toJS } from "mobx";

export type TFilters = {
  name?: string;
  type?: string;
  nation?: string;
  developer?: string;
  chiefDesigner?: string;
  platform?: string;
  producer?: string;
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

  setProducer(producer: string): void {
    if (producer == "Все") {
      delete this.filters.producer;
      this.filters = { ...this.filters };
    } else {
      this.filters = { ...this.filters, producer };
    }
  }

  // set(filter: string, value: string): void {
  //   if (!this.filters[filter as keyof TFilters]) return;
  //   if (value == "Все" || value == "Весь мир") {
  //     delete this.filters[filter as keyof TFilters];
  //     this.filters = { ...this };
  //   } else {
  //     this.filters = { ...this.filters, [filter]: value };
  //   }
  // }

  setNameFilter(name: string): void {
    this.filters = { ...this.filters, name };
  }

  isEmpty(): boolean {
    return Object.keys(this.filters).length === 0;
  }
}

const filtersStore = new FiltersStore();
export default filtersStore;
