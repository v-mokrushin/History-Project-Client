import { IAviationEngine } from "./../parts/engines/aviation-engines";
import { ICrew } from "../departments/crews";
import { IBaseWeapon, IWaponCommonSpec } from "./common-weapon-interfaces";

export interface IAircraft extends IBaseWeapon {
  readonly specifications: IAviationSpecifications;
}

export interface IAviationSpecifications {
  readonly common: IWaponCommonSpec;
  readonly crew?: ICrew;
  readonly sizes?: IAviationSizes;
  readonly weapons?: IAviationWeapons;
  readonly flightCharacteristics?: IFlightCharacteristics;
  readonly powerUnits?: IAviationPowerUnits;
}

export interface IAviationSizes {
  readonly emptyWeight: number;
  readonly curbWeight: number;
  readonly length: number;
  readonly height: number;
  readonly wingSpan: number;
  readonly wingArea: number;
}

export interface IAviationWeapons {
  readonly weaponsSet: string;
  readonly ammunition: string;
  readonly secondSalvoWeight: number;
  readonly bombWeapons: string;
}

export interface IFlightCharacteristics {
  readonly technicalRange: number;
  readonly practicalRange: number;
  readonly maximumSpeed: number;
  readonly climbRate: number;
}

export interface IAviationPowerUnits {
  readonly enginesNumber: number;
  readonly engine: IAviationEngine;
}
