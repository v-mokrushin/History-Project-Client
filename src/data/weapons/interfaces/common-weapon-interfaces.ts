import { INation } from "constants/nations";
import { IWaponBranch, IWeaponType } from "constants/weapon-types";
import { IChiefDesigner } from "../chief-designers";
import { ICrew } from "../crews";
import { IDeveloper } from "../developers";
import { IBodyArmoring } from "../parts/bodies";
import { ITowerArmoring } from "../parts/towers";
import { IPlatform } from "../platforms";
import { IArmoredVehiclesSpecifications } from "./armored-interfaces";
import { IAviationSpecifications } from "./aviation-interfaces";

export interface IWeapon {
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
  specifications: any;
}

type TWeaponSpecification =
  | IArmoredVehiclesSpecifications
  | IAviationSpecifications;

export interface IWaponCommonSpec {
  developer?: IDeveloper;
  developmentYear?: number;
  manufacturer?: string;
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
