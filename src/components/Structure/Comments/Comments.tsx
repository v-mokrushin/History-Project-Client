import React from "react";
import styles from "./Comments.module.scss";
import text_styles from "../../Texts/Text/Text.module.scss";
import classNames from "classnames";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import Text from "components/Texts/Text/Text";
import imageViewerStore from "stores/mobx/imageViewerStore";
import Input from "components/Controls/Input/Input";
import { Button, TextField } from "@mui/material";
import CustomButton from "components/Buttons/Button/Button";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { authorizationStore } from "stores/mobx/authorizationStore";
import { observer } from "mobx-react";
import { alertsStore } from "stores/mobx/alertsStore";
import { getStringDateTime } from "utils/common";
import axios from "axios";
import { Server } from "config/server";
import loadingStore from "stores/mobx/loadingStore";
import { IComment } from "interfaces/comments";
import { Weapons } from "data/weapons/weapons";
import { useNavigate } from "react-router-dom";

interface ICommentsProps {
  comments?: IComment[];
  articleId: string;
  accountMode?: boolean;
  className?: string;
}

const Comments: React.FC<ICommentsProps> = observer(
  ({ comments, accountMode = false, articleId, className }) => {
    const navigate = useNavigate();
    const [newComment, setNewComment] = React.useState<string>("");
    const articles = React.useMemo(() => {
      if (!accountMode) return [];
      else {
        return Weapons.getWeaponsByIds(
          comments?.map((comment) => comment.articleId)
        );
      }
      return [];
    }, [comments]);

    if (!comments?.length && !authorizationStore.isUserAuthorized) return <></>;

    return (
      <div className={classNames(styles.root, className)}>
        <Subtitle id="Комментарии">Комментарии</Subtitle>
        <div className={styles.commentsWrapper}>
          {authorizationStore.isUserAuthorized && !accountMode && (
            <div
              className={classNames(
                styles.commentBox,
                accountMode && styles.commentBox_accountMode
              )}
            >
              <img
                src={authorizationStore.user?.avatar}
                className={styles.avatar}
                alt=""
                onClick={() =>
                  authorizationStore.user?.avatar &&
                  imageViewerStore.openPhoto(authorizationStore.user.avatar)
                }
              />
              <div className={styles.contentBox}>
                <div className={styles.header}>
                  <img
                    src={authorizationStore.user?.avatar}
                    className={styles.avatar_mobile}
                    alt=""
                    onClick={() =>
                      imageViewerStore.openPhoto(
                        authorizationStore.user?.avatar!
                      )
                    }
                  />
                  <div className={styles.header_info}>
                    <Text color="gold" bold>
                      {authorizationStore.user?.username}
                    </Text>
                  </div>
                </div>
                <TextField
                  className={text_styles.root}
                  placeholder="Введите текст комментария"
                  variant="standard"
                  multiline
                  color="warning"
                  value={newComment}
                  onChange={(event) => setNewComment(event.target.value)}
                />
                <div className={styles.buttonsBox}>
                  <CustomButton
                    color="blue"
                    textColor="blue"
                    outlined
                    uppercase
                    onClick={() => setNewComment("")}
                  >
                    Отмена
                  </CustomButton>
                  <CustomButton
                    color="blue"
                    uppercase
                    onClick={() => {
                      if (newComment.length) {
                        loadingStore.uploadNewComment(
                          newComment,
                          setNewComment
                        );
                      } else {
                        alertsStore.runAlert(
                          "error",
                          "Комментарий не может быть пустым."
                        );
                      }
                    }}
                  >
                    Оставить комментарий
                  </CustomButton>
                </div>
              </div>
            </div>
          )}
          {comments &&
            comments.map((comment: IComment, index: number) => (
              <div
                className={classNames(
                  styles.commentBox,
                  accountMode && styles.commentBox_accountMode
                )}
                key={comment.id}
                onClick={() => {
                  if (accountMode && articles) {
                    if (articles[index] != undefined)
                      navigate(articles[index]!.path!);
                  }
                }}
              >
                <img
                  src={
                    accountMode
                      ? authorizationStore.user?.avatar
                      : comment.avatar
                  }
                  className={styles.avatar}
                  alt=""
                  onClick={(event) =>
                    accountMode || imageViewerStore.openPhoto(comment.avatar)
                  }
                />
                <div className={styles.contentBox}>
                  <div className={styles.header}>
                    <img
                      src={
                        accountMode
                          ? authorizationStore.user?.avatar
                          : comment.avatar
                      }
                      className={styles.avatar_mobile}
                      alt=""
                      onClick={() =>
                        accountMode ||
                        imageViewerStore.openPhoto(comment.avatar)
                      }
                    />
                    <div className={styles.header_info}>
                      <Text color="gold" bold>
                        {accountMode
                          ? `Статья: ${articles && articles[index]?.name}`
                          : comment.username}
                      </Text>
                      <Text
                        color="grey"
                        size="small"
                        noMargin
                        className={styles.date_mobile}
                      >
                        {comment.date}
                      </Text>
                    </div>
                  </div>
                  <Text
                    color="grey"
                    size="small"
                    noMargin
                    className={styles.date}
                  >
                    {getStringDateTime(new Date(Date.parse(comment.date)))}
                  </Text>
                  <Text color="black">{comment.text}</Text>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
);

export default Comments;
