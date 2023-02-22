import React from "react";
import styles from "./Comments.module.scss";
import classNames from "classnames";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import Text from "components/Texts/Text/Text";

interface ICommentsProps {
  comments: any;
  className?: string;
}

const Comments: React.FC<ICommentsProps> = ({ comments, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Subtitle id="Комментарии">Комментарии</Subtitle>
      <div className={styles.commentsWrapper}>
        {comments.map((comment: any) => (
          <div className={styles.commentBox} key={comment.id}>
            <img src={comment.avatar} className={styles.avatar} alt="" />
            <div className={styles.contentBox}>
              <div className={styles.header}>
                <img
                  src={comment.avatar}
                  className={styles.avatar_mobile}
                  alt=""
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
              <Text color="grey" size="small" noMargin className={styles.date}>
                {comment.date}
              </Text>
              <Text color="black">{comment.text}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
