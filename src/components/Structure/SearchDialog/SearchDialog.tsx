import React from "react";
import styles from "./SearchDialog.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import { DocumentOverflow } from "utils/document-overflow";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { WEAPONS } from "data/weapons/weapons";
import Text from "components/Texts/Text/Text";
import Input from "components/Controls/Input/Input";
import { Articles } from "data/articles/articles";
import { NavLink } from "react-router-dom";
import burgerStore from "stores/mobx/burgerStore";
import Preloader from "components/Graphics/Preloader/Preloader";

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
    () => WEAPONS.filterByName(inputText),
    [inputText]
  );

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
      // setInputText("");
    }
  }, [commonApplicationStore.searchDialogVisibility]);

  return (
    <div
      className={classNames(
        styles.root,
        commonApplicationStore.searchDialogVisibility && styles.root_open
      )}
    >
      <button
        className={styles.closeButton}
        onClick={() => {
          commonApplicationStore.hideSearchDialog();
        }}
      >
        <div className={styles.closeButton_icon}></div>
      </button>
      <div
        className={classNames(
          styles.window,
          commonApplicationStore.searchDialogVisibility && styles.window_open
        )}
      >
        <Subtitle className={styles.title}>Поиск</Subtitle>
        <Input
          placeholder="Введите название..."
          initialValue={inputText}
          setter={setInputText}
        />
        {inputText ? (
          <div className={styles.search}>
            {articles.length ? (
              <div className={styles.searchTheme}>
                <Text color="gold" bold>
                  Статьи
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
                  Вооружения
                </Text>
                <div className={styles.searchResultsWrapper}>
                  {WEAPONS.filterByName(inputText).map((item) => (
                    <NavLink
                      to={`/weapons/${item.branch?.path}/world/${item.id}`}
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
                          src={item.gallery?.icon}
                          alt=""
                        />
                      </div>
                      <div className={styles.item__inforationWrapper}>
                        <Text bold noMargin color="gold">
                          {item.name}
                        </Text>
                        <Text noMargin color="white">
                          {item.branch?.name.russian}
                        </Text>
                        <Text noMargin color="grey">
                          {item.nation?.name.russian}
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
      </div>
    </div>
  );
});

export default SearchDialog;
