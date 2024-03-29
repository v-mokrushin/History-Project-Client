import React from "react";
import styles from "./WeaponPreviewSettings.module.scss";
import classNames from "classnames";
import settingsStore, { DisplayOnPreview } from "stores/mobx/settingsStore";
import Text from "components/Texts/Text/Text";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

interface IWeaponPreviewSettingsProps {
  className?: string;
}

const WeaponPreviewSettings = observer(
  ({ className }: IWeaponPreviewSettingsProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(styles.wrapper, className)}>
        <button
          onClick={() => settingsStore.toggleDisplayOnPreview()}
          className={classNames(styles.button)}
        >
          <Text
            className={classNames(
              styles.button__text,
              settingsStore.displayOnPreview === DisplayOnPreview.weapons &&
                styles.button__text_animated
            )}
          >
            {t("settings.show")}: {settingsStore.displayOnPreview}
          </Text>
        </button>
        <button
          onClick={() => settingsStore.toggleSortInAscending()}
          className={styles.button}
        >
          <Text className={styles.button__text}>
            {t("settings.order")}:{" "}
            {settingsStore.sortInAscending ? "по возраст." : "по убыванию"}
          </Text>
        </button>
        {settingsStore.displayOnPreview === DisplayOnPreview.weapons && (
          <>
            <button
              onClick={() => settingsStore.toggleColorized()}
              className={styles.button}
            >
              <Text className={styles.button__text}>
                {t("settings.photo")}:{" "}
                {settingsStore.colorized ? "цветные" : "чёрно-белые"}
              </Text>
            </button>
            <button
              onClick={() => settingsStore.toggleDisplaySize()}
              className={styles.button}
            >
              <Text className={styles.button__text}>
                {t("settings.size")}:{" "}
                {settingsStore.displaySize ? "крупный" : "норм."}
              </Text>
            </button>
          </>
        )}
      </div>
    );
  }
);

export default WeaponPreviewSettings;
