// styles
import styles from "./styles.module.css";
// components
import { Container } from "../../components/Container";
import { CardSmallSection } from "../../components/Card/CardSmallSection";
import { CardFlexSection } from "../../components/Card/CardFlexSection";
import { Post } from "../../components/Post";
import { CardLargeSection } from "../../components/Card/CardLargeSection";
import { InputSearch } from "../../components/Input/InputSearch";
import { EventLocation } from "../../components/EventLocation";
import { EventNotification } from "../../components/EventNotification";
import { AvatarSection } from "../../components/Avatar/AvatarSection";
// data
import DemoData from '../../../public/data/DemoData.json'

function Home() {
  return (
    <>
      <Container className={styles.headerContainer}>
        <EventLocation />
        <EventNotification />
      </Container>
      <Container>
        <InputSearch placeholder="Search for artists, venues, and events" />
      </Container>
      <Container>
        <AvatarSection
          title="Subscriptions"
          linkData={{ text: "See All", href: "" }}
        />
      </Container>
      <Container className={styles.recommendedContainer}>
        <CardLargeSection
          title="Recommended"
          linkData={{ text: "See all", href: "" }}
          cardData={DemoData.cardData}
        />
      </Container>
      <Container className={styles.postContainer}>
        <Post
          post={DemoData.post}
        />
      </Container>
      <Container>
        <CardSmallSection
          title="New Events"
          linkData={{ text: "See all", href: "" }}
          cardData={DemoData.cardData}
        />
      </Container>
      <Container>
        <CardFlexSection
          title="Event Near You"
          cardData={DemoData.cardData}
        />
      </Container>
    </>
  );
}

export default Home;
