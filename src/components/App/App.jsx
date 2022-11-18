import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesPage from "../../pages/ArticlesPage/ArticlesPage";
import HomePage from "../../pages/HomePage/HomePage";
import NewsPage from "../../pages/NewsPage/NewsPage";
import Layout from "../Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../../store";
import WarningPage from "../../pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "../../pages/WarningPage/constants";
import { createContext, useState } from "react";
import { BurgerContext } from "../Burger/context";

import "./App.scss";
import "../../assets/css/main.scss";
import ArticlePage from "../../pages/ArticlePage/ArticlePage";
import WeaponsPage from "../../pages/WeaponsPage/WeaponsPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((val) => !val);
  }
  function setClose() {
    setIsOpen(false);
  }

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
              <Route path="/weapons" element={<WeaponsPage />} />
              <Route path="/weapons/:weaponsType" element={<WeaponsPage />} />
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
