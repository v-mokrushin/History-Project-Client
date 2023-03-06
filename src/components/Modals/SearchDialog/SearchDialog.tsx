import React from "react";
import styles from "./SearchDialog.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import { DocumentOverflow } from "utils/document-overflow";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { Weapons } from "data/weapons/weapons";
import Text from "components/Texts/Text/Text";
import Input from "components/Controls/Input/Input";
import { Articles } from "data/articles/articles";
import { NavLink } from "react-router-dom";
import burgerStore from "stores/mobx/burgerStore";
import Preloader from "components/Graphics/Preloader/Preloader";
import { useTranslation } from "react-i18next";
import CloseButton from "components/Buttons/CloseButton/CloseButton";

const SearchDialog = observer(() => {
  const [inputText, setInputText] = React.useState<string>("");
  const articles = React.useMemo(
    () =>
      Object.values(Articles.previews.entities).filter((article: any) =>
        article.title.toLowerCase().includes(inputText.toLowerCase())
      ),
    [inputText]
  );
  const weapons = React.useMemo(
    () => Weapons.filterByName(inputText),
    [inputText]
  );
  const { t } = useTranslation();

  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        commonApplicationStore.hideSearchDialog();
      }
    });
  }, []);

  React.useEffect(() => {
    if (commonApplicationStore.searchDialogVisibility) {
      DocumentOverflow.setHidden();
    } else {
      DocumentOverflow.setAuto();
    }
  }, [commonApplicationStore.searchDialogVisibility]);

  return (
    <div
      className={classNames(
        styles.root,
        commonApplicationStore.searchDialogVisibility && styles.root_open
      )}
    >
      <div
        className={classNames(
          styles.window,
          commonApplicationStore.searchDialogVisibility && styles.window_open
        )}
      >
        <CloseButton
          onClick={() => {
            commonApplicationStore.hideSearchDialog();
          }}
        />
        <Subtitle className={styles.title}>{t("search_dialog.title")}</Subtitle>
        <Input
          theme="dark"
          type="text"
          placeholder="Введите название"
          initialValue={inputText}
          setter={setInputText}
        />
        {inputText ? (
          <div className={styles.search}>
            {articles.length ? (
              <div className={styles.searchTheme}>
                <Text color="gold" bold>
                  {t("search_dialog.articles")}
                </Text>
                <div className={styles.searchResultsWrapper}>
                  {articles.map((item: any) => (
                    <NavLink
                      to={`/articles/${item.id}`}
                      className={styles.item}
                      key={item.id}
                      onClick={() => {
                        commonApplicationStore.hideSearchDialog();
                        burgerStore.setClose();
                      }}
                    >
                      <div style={{ position: "relative" }}>
                        <Preloader color="white" />
                        <img
                          className={styles.item__icon}
                          src={item.minBackgroundURL}
                          alt=""
                        />
                      </div>
                      <div className={styles.item__inforationWrapper}>
                        <Text bold noMargin color="gold">
                          {item.title}
                        </Text>
                        <Text noMargin color="white">
                          Статья
                        </Text>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}
            {weapons.length ? (
              <div className={styles.searchTheme}>
                <Text color="gold" bold>
                  {t("search_dialog.weapons")}
                </Text>
                <div className={styles.searchResultsWrapper}>
                  {Weapons.filterByName(inputText).map((weapon) => (
                    <NavLink
                      to={weapon.path!}
                      className={styles.item}
                      key={weapon.id}
                      onClick={() => {
                        commonApplicationStore.hideSearchDialog();
                        burgerStore.setClose();
                      }}
                    >
                      <div style={{ position: "relative" }}>
                        <Preloader color="white" />
                        <img
                          className={styles.item__icon}
                          src={weapon.gallery?.icon}
                          alt=""
                        />
                      </div>
                      <div className={styles.item__inforationWrapper}>
                        <Text bold noMargin color="gold">
                          {weapon.name}
                        </Text>
                        <Text noMargin color="white">
                          {weapon.branch?.name.russian}
                        </Text>
                        <Text noMargin color="grey">
                          {weapon.nation?.name.russian}
                        </Text>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        {inputText && !weapons.length && !articles.length && (
          <div className={styles.notFoundWrapper}>
            <Text color="white">НИЧЕГО НЕ НАЙДЕНО</Text>
          </div>
        )}
      </div>
    </div>
  );
});

export default SearchDialog;
