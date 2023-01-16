import { IBaseWeapon, IWaponCommonSpec } from "./common-weapon-interfaces";

export interface ISmallArm extends IBaseWeapon {
  specifications: ISmallArmsSpecifications;
}

export interface ISmallArmsSpecifications {
  common: IWaponCommonSpec;
}
