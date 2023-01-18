import { IBaseWeapon, IWaponCommonSpec } from "./common-weapon-interfaces";

export interface ISmallArm extends IBaseWeapon {
  readonly specifications: ISmallArmsSpecifications;
}

export interface ISmallArmsSpecifications {
  readonly common: IWaponCommonSpec;
}
