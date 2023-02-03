import { INation } from "constants/nations";
import { IWaponBranch, IWeaponType } from "constants/weapon-types";
import { IChiefDesigner } from "../departments/chief-designers";
import { IDeveloper } from "../departments/developers";
import { IPlatform } from "../departments/platforms";
import { IProducer } from "../departments/producers";
import {
  IArmoredVehicle,
  IArmoredVehiclesSpecifications,
} from "./armored-interfaces";
import { IAircraft, IAviationSpecifications } from "./aviation-interfaces";

export interface IBaseWeapon {
  readonly name: string;
  readonly shortName?: string;
  readonly type: IWeaponType;
  readonly adoptedIntoServiceDate: number;
  branch?: IWaponBranch;
  readonly id?: string;
  readonly isReady?: boolean;
  nation?: INation;
  gallery?: IWeaponGallery;
  readonly article?: JSX.Element;
  readonly intro?: string[];
  readonly videomaterials?: string[];
  readonly sections?: string[];
  readonly models?: IModel[];
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
  readonly exploitationYears?: string;
  readonly numberOfIssued?: number;
}

export interface IWeaponGallery {
  path: string;
  isColorizedIcon: boolean;
  get icon(): string;
}

export interface IModel {
  readonly title: string;
  photo: string;
  readonly link: string;
}
