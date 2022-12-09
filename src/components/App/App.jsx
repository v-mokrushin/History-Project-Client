import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesPage from "../../pages/ArticlesPage/ArticlesPage";
import HomePage from "../../pages/HomePage/HomePage";
import NewsPage from "../../pages/NewsPage/NewsPage";
import Layout from "../Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../../store";
import WarningPage from "../../pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "../../pages/WarningPage/constants";
import React, { createContext, useState } from "react";
import { BurgerContext } from "../Burger/context";

import "./App.scss";
import "../../assets/css/main.scss";
import ArticlePage from "../../pages/ArticlePage/ArticlePage";
import WeaponsTypeSelectionPage from "../../pages/WeaponsTypeSelectionPage/WeaponsTypeSelectionPage";
import UniversalPage from "../../pages/NationSelectionPage/NationSelectionPage";
import WeaponDisplayPage from "../../pages/WeaponDisplayPage/WeaponDisplayPage";
import WeaponsPreviewPage from "../../pages/WeaponsPreviewPage/WeaponsPreviewPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((val) => !val);
    if (!isOpen) document.body.style.overflow = "hidden";
    if (isOpen) document.body.style.overflow = "auto";
  }
  function setClose() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  React.useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      // event.preventDefault();
    });
  }, []);

  return (
    <Provider store={store}>
      <BurgerContext.Provider value={{ isOpen, toggle, setClose }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route index element={<HomePage />} />
              <Route
                path="/news"
                element={<WarningPage pageType={WARNING_PAGE_TYPE.notFound} />}
              />
              <Route path="/articles" element={<ArticlesPage />}></Route>
              <Route path="/articles/:articleId" element={<ArticlePage />} />
              <Route path="/weapons/" element={<WeaponsTypeSelectionPage />} />
              <Route
                path="/weapons/:weaponsTypePath"
                element={<UniversalPage />}
              />
              <Route
                path="/weapons/:weaponsBranchPath/:nationPath"
                element={<WeaponsPreviewPage />}
              />
              <Route
                path="/weapons/:weaponsBranchPath/:nationPath/:weaponId"
                element={<WeaponDisplayPage />}
              />
              <Route
                path="/battles"
                element={
                  <WarningPage pageType={WARNING_PAGE_TYPE.workInProgress} />
                }
              />
              <Route
                path="/links"
                element={
                  <WarningPage pageType={WARNING_PAGE_TYPE.workInProgress} />
                }
              />
              <Route
                path="*"
                element={<WarningPage pageType={WARNING_PAGE_TYPE.notFound} />}
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </BurgerContext.Provider>
    </Provider>
  );
}

export default App;
