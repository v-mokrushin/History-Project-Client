import { alertsStore } from "./alertsStore";
import axios from "axios";
import { Server } from "config/server";
import { makeAutoObservable, observable, runInAction, toJS } from "mobx";

export class LoadingStore {
  public isLoading: boolean;
  public loadedArticlesInfo: any;
  public actualArticle: any;

  constructor() {
    this.isLoading = true;
    this.loadedArticlesInfo = [];

    makeAutoObservable(this);
  }


  public getActualArticleViews() {
    if (this.actualArticle) {
      return this.actualArticle.views;
    }
  }

  private setStatus(value: boolean): void {
    this.isLoading = value;
  }

  public checkLoading(articleId: string | undefined): void {
    if (!articleId) return;

    if (!this.loadedArticlesInfo[articleId]) {
      this.isLoading = true;

      axios
        .post(Server.path("/weapons/views/add"), { id: articleId })
        .then((response) => {
          console.log(response);
          this.loadedArticlesInfo[articleId] = {
            id: articleId,
            views: response.data.views - 1,
          };
          this.actualArticle = this.loadedArticlesInfo[articleId];
          this.setStatus(false);
        })
        .catch((error) => {
          alertsStore.add(
            "error",
            "Не удалось загрузить колличество просмотров статьи"
          );
          this.setStatus(false);
        });
    } else {
      this.isLoading = false;
      this.actualArticle = this.loadedArticlesInfo[articleId];

      axios
        .post(Server.path("/weapons/views/add"), { id: articleId })
        .then((response) => {
          console.log(response);
        });
    }
  }
}

const loadingStore = new LoadingStore();
export default loadingStore;
