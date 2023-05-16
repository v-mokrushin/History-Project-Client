import React from "react";
import styles from "./Banner.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import { DocumentOverflow } from "utils/document-overflow";
import Text from "components/Texts/Text/Text";
import Input from "../../Controls/Input/Input";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import Logo from "components/Graphics/Logo/Logo";
import { useNavigate } from "react-router";
import burgerStore from "stores/mobx/burgerStore";
import { accountStore } from "stores/mobx/authorizationStore";
import axios from "axios";
import Preloader from "components/Graphics/Preloader/Preloader";
import SpecialLogo from "components/Graphics/SpecialLogo/SpecialLogo";
import { SPECIAL_LOGO_TYPE } from "components/Graphics/SpecialLogo/constants";

const Banner = observer(() => {
  React.useEffect(() => {}, []);

  React.useEffect(() => {
    commonApplicationStore.bannerVisibility
      ? DocumentOverflow.setHidden()
      : DocumentOverflow.setAuto();
  }, [commonApplicationStore.bannerVisibility]);

  return (
    <div
      className={classNames(
        styles.root,
        commonApplicationStore.bannerVisibility && styles.root_open
      )}
    >
      <div className={classNames(styles.dialog)}>
        <SpecialLogo
          type={SPECIAL_LOGO_TYPE.loading}
          title={commonApplicationStore.bannerTitle}
          whiteColor
        />
      </div>
    </div>
  );
});

export default Banner;
