import React from "react";
import styles from "./YTFrame.module.scss";
import classNames from "classnames";
import TextBlock from "components/TextBlock/TextBlock";
import Subtitle from "components/Subtitle/Subtitle";

interface IYTFrameProps {
  links: string[];
  id: string;
  showTitle?: boolean;
  className?: string;
}

export default function YTFrame({
  links,
  id,
  showTitle = true,
  className,
}: IYTFrameProps) {
  return (
    <TextBlock>
      {showTitle ? (
        <Subtitle id="Видеоматериалы">Видеоматериалы</Subtitle>
      ) : (
        <></>
      )}
      <div className={styles.frameBox}>
        {links?.map((item, index) => (
          <iframe
            key={`video-link-${id}-${index}`}
            className={styles.video}
            src={item}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </TextBlock>
  );
}
