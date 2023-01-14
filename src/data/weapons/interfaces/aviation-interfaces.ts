import { IAviationEngine } from "./../parts/engines/aviation-engines";
import { ICrew } from "../crews";
import { IBodyArmoring } from "../parts/bodies";
import { ITowerArmoring } from "../parts/towers";
import { IWaponCommonSpec } from "./common-weapon-interfaces";

export interface IAviationSpecifications {
  common: IWaponCommonSpec;
  crew?: ICrew;
  sizes?: IAviationSizes;
  weapons?: IAviationWeapons;
  flightCharacteristics: IFlightCharacteristics;
  powerUnits?: IAviationPowerUnits;
}

export interface IAviationSizes {
  emptyWeight: number;
  curbWeight: number;
  length: number;
  height: number;
  wingSpan: number;
  wingArea: number;
}

export interface IAviationWeapons {
  weaponsSet: string;
  ammunition: string;
  secondSalvoWeight: number;
  bombWeapons: string;
}

export interface IFlightCharacteristics {
  technicalRange: number;
  practicalRange: number;
  maximumSpeed: number;
  climbRate: number;
}

export interface IAviationPowerUnits {
  enginesNumber: number;
  engine: IAviationEngine;
}
