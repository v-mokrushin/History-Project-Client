import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesPage from "../../pages/ArticlesPage/ArticlesPage";
import HomePage from "../../pages/HomePage/HomePage";
import Layout from "../Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../../store";
import WarningPage from "../../pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "../../pages/WarningPage/constants";
import React, { createContext, useState } from "react";
import { BurgerContext } from "../Burger/context";
import "../../assets/css/main.scss";
import ArticlePage from "../../pages/ArticlePage/ArticlePage";
import WeaponsBranchSelectionPage from "../../pages/WeaponsBranchSelectionPage/WeaponsBranchSelectionPage";
import NationSelectionPage from "../../pages/NationSelectionPage/NationSelectionPage";
import WeaponDisplayPage from "../../pages/WeaponDisplayPage/WeaponDisplayPage";
import WeaponsPreviewPage from "../../pages/WeaponsPreviewPage/WeaponsPreviewPage";
import { ImageViewerContext } from "../ImageViewer/context";

function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  function toggleBurgerOpen() {
    setBurgerOpen((val) => !val);
    if (!burgerOpen) document.body.style.overflow = "hidden";
    if (burgerOpen) document.body.style.overflow = "auto";
  }
  function setBurgerClose() {
    setBurgerOpen(false);
    document.body.style.overflow = "auto";
  }

  const [imageViewer, setImageViewer] = useState({ open: false });

  React.useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      // event.preventDefault();
    });
  }, []);

  return (
    <Provider store={store}>
      <BurgerContext.Provider
        value={{ burgerOpen, toggleBurgerOpen, setBurgerClose }}
      >
        <ImageViewerContext.Provider
          value={{ value: imageViewer, setValue: setImageViewer }}
        >
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route index element={<HomePage />} />
                <Route
                  path="/news"
                  element={
                    <WarningPage pageType={WARNING_PAGE_TYPE.notFound} />
                  }
                />
                <Route path="/articles" element={<ArticlesPage />}></Route>
                <Route path="/articles/:articleId" element={<ArticlePage />} />
                <Route
                  path="/weapons/"
                  element={<WeaponsBranchSelectionPage />}
                />
                <Route
                  path="/weapons/:WeaponsBranchSelectionPage"
                  element={<NationSelectionPage />}
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
                  element={
                    <WarningPage pageType={WARNING_PAGE_TYPE.notFound} />
                  }
                />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ImageViewerContext.Provider>
      </BurgerContext.Provider>
    </Provider>
  );
}

export default App;
