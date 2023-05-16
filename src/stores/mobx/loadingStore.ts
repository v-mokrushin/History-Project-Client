import { accountStore } from "./authorizationStore";
import { alertsStore } from "./alertsStore";
import axios from "axios";
import { Server } from "config/server";
import { makeAutoObservable, observable, runInAction, toJS } from "mobx";
import {
  IComment,
  ILoadedArticleInfo,
  ILoadedArticlesInfo,
} from "interfaces/comments";

export class LoadingStore {
  public isLoading: boolean;
  public loadedArticlesInfo: ILoadedArticlesInfo;
  public actualArticle: ILoadedArticleInfo | undefined;

  constructor() {
    this.isLoading = true;
    this.loadedArticlesInfo = {};

    makeAutoObservable(this);
  }

  public getActualArticleViews() {
    if (this.actualArticle) {
      return this.actualArticle.views;
    }
  }

  public getActualArticleComments() {
    if (this.actualArticle) {
      return this.actualArticle.comments;
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
        .all([
          axios.post(Server.path("/views/add"), { id: articleId }),
          axios.post(Server.path("/comments/get"), { id: articleId }),
        ])
        .then(
          axios.spread((responseViews, responseComments) => {
            this.loadedArticlesInfo[articleId] = {
              id: articleId,
              views: responseViews.data.views - 1,
              comments: responseComments.data,
            };
            this.actualArticle = this.loadedArticlesInfo[articleId];
            this.setStatus(false);
          })
        )
        .catch((error) => {
          alertsStore.runAlert(
            "error",
            "Не удалось загрузить колличество просмотров и комментарии статьи"
          );
          this.setStatus(false);
        });
    } else {
      this.isLoading = false;
      this.actualArticle = this.loadedArticlesInfo[articleId];

      axios
        .post(Server.path("/views/add"), { id: articleId })
        .then((response) => {});
    }
  }

  public uploadNewComment(text: string, setText: Function) {
    if (this.actualArticle)
      axios
        .post(Server.path("/comments/add"), {
          articleId: this.actualArticle.id,
          userId: accountStore.user?.id,
          text,
        })
        .then((response) => {
          this.addNewComment({
            ...response.data,
            avatar: accountStore.user?.avatar,
            username: accountStore.user?.username,
          });

          alertsStore.runAlert("info", "Вы оставили комментарий.");
          setText("");
        });
  }

  private addNewComment(newComment: IComment) {
    if (this.actualArticle) {
      loadingStore.actualArticle?.comments.unshift(newComment);
      accountStore.user?.comments?.unshift(newComment);
    }
  }
}

const loadingStore = new LoadingStore();
export default loadingStore;
