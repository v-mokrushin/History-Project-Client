import React from "react";
import styles from "./WeaponPreviewSettings.module.scss";
import classNames from "classnames";
import settingsStore, { DisplayOnPreview } from "stores/mobx/settingsStore";
import Text from "components/Text/Text";
import { observer } from "mobx-react";

interface IWeaponPreviewSettingsProps {
  className?: string;
}

const WeaponPreviewSettings = observer(
  ({ className }: IWeaponPreviewSettingsProps) => {
    return (
      <div className={classNames(styles.root, className)}>
        <button
          onClick={() => settingsStore.toggleDisplayOnPreview()}
          className={styles.btn}
        >
          <Text className={styles.btn__text}>
            Показать: {settingsStore.displayOnPreview}
          </Text>
        </button>
        {settingsStore.displayOnPreview === DisplayOnPreview.weapons && (
          <>
            <button
              onClick={() => settingsStore.toggleSortInAscending()}
              className={styles.btn}
            >
              <Text className={styles.btn__text}>
                Порядок:{" "}
                {settingsStore.sortInAscending ? "по возраст." : "по убыванию"}
              </Text>
            </button>
            <button
              onClick={() => settingsStore.toggleColorized()}
              className={styles.btn}
            >
              <Text className={styles.btn__text}>
                Фото: {settingsStore.colorized ? "цветные" : "чёрно-белые"}
              </Text>
            </button>
            <button
              onClick={() => settingsStore.toggleDisplaySize()}
              className={styles.btn}
            >
              <Text className={styles.btn__text}>
                Размер: {settingsStore.displaySize ? "крупный" : "норм."}
              </Text>
            </button>
          </>
        )}
      </div>
    );
  }
);

export default WeaponPreviewSettings;
