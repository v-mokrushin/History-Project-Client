import { INation } from "constants/nations";
import { IWaponBranch, IWeaponType } from "constants/weapon-types";
import { IChiefDesigner } from "../../data/weapons/departments/chief-designers";
import { IDeveloper } from "../../data/weapons/departments/developers";
import { IPlatform } from "../../data/weapons/departments/platforms";
import { IProducer } from "../../data/weapons/departments/producers";
import {
  IArmoredVehicle,
  IArmoredVehiclesSpecifications,
} from "./armored-interfaces";
import { IAircraft, IAviationSpecifications } from "./aviation-interfaces";

export interface IBaseWeapon {
  readonly name: string;
  readonly shortName?: string;
  readonly path?: string;
  readonly type: IWeaponType;
  readonly adoptedIntoServiceDate: number;
  branch?: IWaponBranch;
  readonly id?: string;
  readonly isReady?: boolean;
  nation?: INation;
  gallery?: IWeaponGallery;
  galleryInfo?: IWeaponGalleryInfo;
  readonly article?: JSX.Element;
  readonly intro?: (string | undefined)[];
  readonly videomaterials?: string[];
  readonly sections?: string[];
  readonly models?: IModel[];
  isVideoIntro?: boolean;
}

export type TWeapon = IArmoredVehicle | IAircraft;

export type TWeaponSpecification =
  | IArmoredVehiclesSpecifications
  | IAviationSpecifications;

export interface IWaponCommonSpec {
  readonly developer?: IDeveloper;
  readonly developmentYear?: number;
  readonly producer?: IProducer[];
  readonly chiefDesigner?: IChiefDesigner;
  readonly platform?: IPlatform;
  readonly productionPeriod?: string;
  readonly exploitationPeriod?: string;
  readonly numberOfIssued?: number;
}

export interface IWeaponGallery {
  path: string;
  isColorizedIcon: boolean;
  get icon(): string;
  get intro(): string;
  isIconsRemote?: boolean;
  originalIcon: string;
  localOriginalIcon: string;
  localColorizedIcon: string;
  remoteOriginalIcon: string;
  remoteColorizedIcon: string;
  photos?: string[];
  postwarPhotos?: string[];
  schemes?: string[];
  arts?: string[];
}

export interface IWeaponGalleryInfo {
  isIconsRemote?: boolean;
  remoteOriginalIcon?: string;
  remoteColorizedIcon?: string;
  photoCollectionSize?: number;
  postwarPhotoCollectionSize?: number;
  schemesCollectionSize?: number;
  artsCollectionSize?: number;
}

export class WeaponGalleryInfo implements IWeaponGalleryInfo {
  photoCollectionSize?: number;
  postwarPhotoCollectionSize?: number;
  schemesCollectionSize?: number;
  artsCollectionSize?: number;

  constructor(
    photoCollectionSize: number | undefined,
    postwarPhotoCollectionSize: number | undefined,
    schemesCollectionSize: number | undefined,
    artsCollectionSize: number | undefined
  ) {
    this.photoCollectionSize = photoCollectionSize;
    this.postwarPhotoCollectionSize = postwarPhotoCollectionSize;
    this.schemesCollectionSize = schemesCollectionSize;
    this.artsCollectionSize = artsCollectionSize;
  }
}

export interface IModel {
  readonly title: string;
  photo: string;
  readonly link: string;
}
