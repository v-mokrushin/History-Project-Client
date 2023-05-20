import { TWeapon } from "interfaces/weapons/common-weapon-interfaces";
import { IGallerySection } from "../../interfaces/gallery";
import { action, makeAutoObservable, observable } from "mobx";

export class GalleryStore {
  public actualSection: IGallerySection;

  public weapons: IGallerySection;
  public postwarWeapons: IGallerySection;
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

    this.postwarWeapons = {
      title: "Послевоенные",
      name: "post-war-weapons",
      src: "/images/gallery/sections/post-war.jpg",
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

    this.actualSection = this.weapons;

    makeAutoObservable(this);
  }

  public createGallery(weapons: TWeapon[]): void {
    weapons.forEach((weapon: TWeapon) => {
      const gallery = weapon.gallery;

      if (gallery) {
        const arts = gallery.arts;
        arts && this.pushArtsContent(arts);

        const weapons = gallery.photos;
        weapons && this.pushWeaponsContent(weapons);
        gallery.originalIcon &&
          this.pushWeaponsContent([gallery.originalIcon]);

        const postwar = gallery.postwarPhotos;
        postwar && this.pushPostWarWeaponsContent(postwar);

        const schemes = gallery.schemes;
        schemes && this.pushSchemesContent(schemes);
      }
    });
  }

  public setActual(section: IGallerySection): void {
    this.actualSection = section;
  }

  public isActual(section: IGallerySection): boolean {
    return section.title == this.actualSection.title;
  }

  public getSections(): IGallerySection[] {
    return [
      this.weapons,
      this.postwarWeapons,
      this.schemes,
      this.arts,
      this.posters,
    ];
  }

  public pushWeaponsContent(content: string[]) {
    this.weapons.content.push(...content);
  }

  public pushPostWarWeaponsContent(content: string[]) {
    this.postwarWeapons.content.push(...content);
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
