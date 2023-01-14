import { ICrew } from "../crews";
import { IBodyArmoring } from "../parts/bodies";
import { ITowerArmoring } from "../parts/towers";
import { IWaponCommonSpec } from "./common-weapon-interfaces";

export interface IArmoredVehiclesSpecifications {
  common: IWaponCommonSpec;
  crew?: ICrew;
  sizes?: IArmoredVehiclesSizes;
  armoring?: IArmoredVehiclesArmoring;
  weapon?: any;
  mobility?: any;
}

export interface IArmoredVehiclesSizes {
  weight: number;
  length: number;
  width: number;
  height: number;
  clearance: number;
}

export interface IArmoredVehiclesArmoring {
  type: string;
  body: IBodyArmoring;
  tower?: ITowerArmoring;
}
