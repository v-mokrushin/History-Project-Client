import React from "react";
import styles from "./Alerts.module.scss";
import classNames from "classnames";
import { Alert, AlertTitle } from "@mui/material";
import Text from "components/Texts/Text/Text";
import { observer } from "mobx-react";
import { alertsStore } from "stores/mobx/alertsStore";

interface IAlertsProps {
  className?: string;
}

function getIcon(type: string) {
  if (type === "info") {
    return (
      <svg className={styles.icon}>
        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
      </svg>
    );
  }

  if (type === "error") {
    return (
      <svg className={styles.icon}>
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
      </svg>
    );
  }
}

const Alerts: React.FC<IAlertsProps> = observer(({ className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      {alertsStore.alerts.map((alert) => (
        <div
          key={alert.id}
          className={classNames(styles.alert, styles[alert.type])}
          onClick={() => alertsStore.delete(alert.id)}
        >
          {getIcon("error")}
          <div className={styles.content}>
            <Text size="small" bold noMargin>
              {alert.type === "info" ? "Сообщение" : "Ошибка"}
            </Text>
            <Text size="small" noMargin>
              {alert.message}
            </Text>
          </div>
        </div>
      ))}
      {/* <div className={classNames(styles.alert, styles["info"])}>
        {getIcon("info")}
        <div className={styles.content}>
          <Text size="small" bold noMargin>
            Сообщение
          </Text>
          <Text size="small" noMargin>
            Вы успешно создали статью.
          </Text>
        </div>
      </div>
      <div className={classNames(styles.alert, styles["error"])}>
        {getIcon("error")}
        <div className={styles.content}>
          <Text size="small" bold noMargin>
            Ошибка
          </Text>
          <Text size="small" noMargin>
            Не удалось соединиться с сервером. Попробуйте позже.
          </Text>
        </div>
      </div> */}
    </div>
  );
});

export default Alerts;
