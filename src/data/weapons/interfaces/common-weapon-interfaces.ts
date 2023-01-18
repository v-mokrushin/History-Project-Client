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
  name: string;
  type: IWeaponType;
  adoptedIntoServiceDate: number;
  branch?: IWaponBranch;
  id?: string;
  isReady?: boolean;
  nation?: INation;
  gallery?: IWeaponGallery;
  JSXComponent?: JSX.Element;
  intro?: string[];
  videomaterials?: string[];
  sections?: string[];
  models?: IModel[];
}

export type TWeapon = IArmoredVehicle | IAircraft;

export type TWeaponSpecification =
  | IArmoredVehiclesSpecifications
  | IAviationSpecifications;

export interface IWaponCommonSpec {
  developer?: IDeveloper;
  developmentYear?: number;
  producer?: IProducer[];
  chiefDesigner?: IChiefDesigner;
  platform?: IPlatform;
  productionPeriod?: string;
  exploitationYears?: string;
  numberOfIssued?: number;
}

export interface IWeaponGallery {
  path: string;
  isColorizedIcon: boolean;
  get icon(): string;
}

export interface IModel {
  title: string;
  photo: string;
  link: string;
}
