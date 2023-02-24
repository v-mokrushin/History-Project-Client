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
import authorizationStore from "stores/mobx/authorizationStore";
import { observer } from "mobx-react";

interface ICommentsProps {
  comments: any;
  className?: string;
}

const Comments: React.FC<ICommentsProps> = observer(
  ({ comments, className }) => {
    const [newComment, setNewComment] = React.useState<string>("");
    // UserAccounts

    return (
      <div className={classNames(styles.root, className)}>
        <Subtitle id="Комментарии">Комментарии</Subtitle>
        <div className={styles.commentsWrapper}>
          {authorizationStore.isUserAuthorized && (
            <div className={styles.commentBox} key={comments[4].id}>
              <img
                src={authorizationStore.authorizedUser?.avatar}
                className={styles.avatar}
                alt=""
                onClick={() => imageViewerStore.openPhoto(comments[4].avatar)}
              />
              <div className={styles.contentBox}>
                <div className={styles.header}>
                  <img
                    src={authorizationStore.authorizedUser?.avatar}
                    className={styles.avatar_mobile}
                    alt=""
                    onClick={() =>
                      imageViewerStore.openPhoto(
                        authorizationStore.authorizedUser?.avatar!
                      )
                    }
                  />
                  <div className={styles.header_info}>
                    <Text color="gold" bold>
                      {authorizationStore.authorizedUser?.username}
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
                    onClick={() => setNewComment("")}
                  >
                    Оставить комментарий
                  </CustomButton>
                </div>
              </div>
            </div>
          )}
          {comments.map((comment: any) => (
            <div className={styles.commentBox} key={comment.id}>
              <img
                src={comment.avatar}
                className={styles.avatar}
                alt=""
                onClick={() => imageViewerStore.openPhoto(comment.avatar)}
              />
              <div className={styles.contentBox}>
                <div className={styles.header}>
                  <img
                    src={comment.avatar}
                    className={styles.avatar_mobile}
                    alt=""
                    onClick={() => imageViewerStore.openPhoto(comment.avatar)}
                  />
                  <div className={styles.header_info}>
                    <Text color="gold" bold>
                      {comment.username}
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
                  {comment.date}
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
