import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesPage from "../../pages/ArticlesPage/ArticlesPage";
import HomePage from "../../pages/HomePage/HomePage";
import Layout from "../Structure/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../../stores/redux";
import WarningPage from "../../pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "../../pages/WarningPage/constants";
import "../../assets/css/main.scss";
import ArticlePage from "../../pages/ArticlePage/ArticlePage";
import WeaponsBranchSelectionPage from "../../pages/WeaponsBranchSelectionPage/WeaponsBranchSelectionPage";
import NationSelectionPage from "../../pages/NationSelectionPage/NationSelectionPage";
import WeaponDisplayPage from "../../pages/WeaponDisplayPage/WeaponDisplayPage";
import WeaponsPreviewPage from "../../pages/WeaponsPreviewPage/WeaponsPreviewPage";
import "../../stores/mobx/index";
import ArtilcleCreatorPage from "pages/ArtilcleCreatorPage/ArtilcleCreatorPage";

function App() {
  React.useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      // event.preventDefault();
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/article-creator" element={<ArtilcleCreatorPage />} />
            <Route path="/articles" element={<ArticlesPage />}></Route>
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="/weapons/" element={<WeaponsBranchSelectionPage />} />
            <Route
              path="/weapons/:weaponsBranchPath"
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
              element={<WarningPage pageType={WARNING_PAGE_TYPE.notFound} />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
