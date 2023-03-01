import { authorizationStore } from "./authorizationStore";
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
            console.log(toJS(this.actualArticle));
          })
        )
        .catch((error) => {
          alertsStore.add(
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
        .then((response) => {
          console.log(response);
        });
    }
  }

  public addNewComment(text: string, setText: Function) {
    axios
      .post(Server.path("/comments/add"), {
        articleId: this.actualArticle.id,
        userId: authorizationStore.user?.id,
        text,
      })
      .then((response) => {
        loadingStore.actualArticle.comments.unshift({
          ...response.data,
          avatar: authorizationStore.user?.avatar,
          username: authorizationStore.user?.username,
        });
        console.log(toJS(loadingStore.actualArticle));
        setText("");
      });
  }
}

const loadingStore = new LoadingStore();
export default loadingStore;
