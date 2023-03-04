import { IGallerySection } from "../../interfaces/gallery";
import { action, makeAutoObservable, observable } from "mobx";

export class GalleryStore {
  public actualSection: IGallerySection;

  public weapons: IGallerySection;
  public arts: IGallerySection;
  public posters: IGallerySection;
  public schemes: IGallerySection;

  constructor() {
    this.weapons = {
      title: "Вооружения",
      name: "weapons",
      src: "/images/gallery/sections/weapons.jpg",
      content: [] as string[],
    };

    this.arts = {
      title: "Арты",
      name: "arts",
      src: "/images/gallery/sections/arts.jpg",
      content: [] as string[],
    };

    this.posters = {
      title: "Плакаты",
      name: "posters",
      src: "/images/gallery/sections/posters.jpg",
      content: new Array(58)
        .fill("")
        .map(
          (_, index: number) =>
            `/images/gallery/sections/posters/${index + 1}.jpg`
        ),
    };

    this.schemes = {
      title: "Схемы",
      name: "schemes",
      src: "/images/gallery/sections/schemes.jpg",
      content: [] as string[],
    };

    this.actualSection = this.posters;

    makeAutoObservable(this);
  }

  public setActual(section: IGallerySection): void {
    this.actualSection = section;
  }

  public isActual(section: IGallerySection): boolean {
    return section.title == this.actualSection.title;
  }

  public getSections(): IGallerySection[] {
    return [this.weapons, this.arts, this.posters, this.schemes];
  }

  public pushWeaponsContent(content: string[]) {
    this.weapons.content.push(...content);
  }

  public pushArtsContent(content: string[]) {
    this.arts.content.push(...content);
  }

  public pushSchemesContent(content: string[]) {
    this.schemes.content.push(...content);
  }
}

const galleryStore = new GalleryStore();
export default galleryStore;
