export interface IAlert {
  id: string;
  type: TAlertType;
  message: string;
  selfKill: any;
}

export type TAlertType = "info" | "error";
