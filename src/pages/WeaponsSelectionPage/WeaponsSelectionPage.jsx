import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import InnerContentWrapper from "../../components/InnerContentWrapper/InnerContentWrapper";
import IntroImage from "../../components/IntroImage/IntroImage";
import PreviewWeaponCard from "../../components/PreviewWeaponCard/PreviewWeaponCard";
import Timeline from "../../components/Timeline/Timeline";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import Title2 from "../../components/Title2/Title2";
import { ANIMATIONS } from "../../constants/animation";
import { ARMORED } from "../../data/armored";
import { navigationMiddlewares } from "../../store/navigation/changeActualSectionMiddleware";
import styles from "./WeaponsSelectionPage.module.scss";

export default function WeaponsSelectionPage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(navigationMiddlewares.setWeaponsActualSection());
  }, []);

  return (
    <div className={styles.root}>
      {/* <IntroImage /> */}
      <ContentWrapper>
        <Container>
          <InnerContentWrapper>
            <Title2>Бронетехника СССР</Title2>
            <Timeline>
              <TimelineItem year="1945">
                <PreviewWeaponCard weapon={ARMORED[0]} />
                <PreviewWeaponCard weapon={ARMORED[1]} />
                <PreviewWeaponCard weapon={ARMORED[2]} />
                <PreviewWeaponCard weapon={ARMORED[3]} />
              </TimelineItem>
              {Array(7)
                .fill(null)
                .map((item, index) => (
                  <TimelineItem key={index} year={1944 - index} />
                ))}
            </Timeline>
          </InnerContentWrapper>
        </Container>
      </ContentWrapper>
    </div>
  );
}
