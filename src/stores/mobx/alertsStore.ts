import { action, makeAutoObservable, observable, runInAction } from "mobx";
import { Random } from "utils/random";

export interface IAlert {
  id: string;
  type: TAlertType;
  message: string;
  selfKill: any;
}

export type TAlertType = "info" | "error";

class AlertsStore {
  public alerts: IAlert[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public add(type: TAlertType, message: string, duration?: number) {
    const id = Random.getUniqueId();

    runInAction(() => {
      this.alerts.push({
        id,
        type,
        message,
        selfKill: setTimeout(
          () => {
            this.delete(id);
          },
          duration ? duration : 4000
        ),
      });
    });
  }

  public delete(id: string) {
    this.alerts = this.alerts.filter((alert) => alert.id !== id);
  }
}

export const alertsStore = new AlertsStore();
