import { ICrew } from "../../data/weapons/departments/crews";
import { IBodyArmoring } from "../../data/weapons/parts/bodies";
import { ITowerArmoring } from "../../data/weapons/parts/towers";
import { IBaseWeapon, IWaponCommonSpec } from "./common-weapon-interfaces";

export interface IArmoredVehicle extends IBaseWeapon {
  readonly specifications: IArmoredVehiclesSpecifications;
}

export interface IArmoredVehiclesSpecifications {
  readonly common: IWaponCommonSpec;
  readonly crew?: ICrew;
  sizes?: IArmoredVehiclesSizes;
  readonly armoring?: IArmoredVehiclesArmoring;
  readonly weapon?: any;
  readonly mobility?: any;
}

export interface IArmoredVehiclesSizes {
  readonly weight: number;
  readonly length: number;
  readonly width: number;
  readonly height: number;
  readonly clearance: number;
}

export interface IArmoredVehiclesArmoring {
  readonly type: string;
  readonly body: IBodyArmoring;
  readonly tower?: ITowerArmoring;
}
