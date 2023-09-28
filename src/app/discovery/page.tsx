// styles
import styles from "./styles.module.css";
// assets
import EventMusic2JPG from "public/assets/event-music-2.jpg";
import EventCarnivalJPG from "public/assets/event-carnival.jpg";
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
          cardData={[
            {
              image: EventMusic2JPG,
              title: "Brooks Davis Live 1",
              date: "Sat, 15 Sept, 2023",
              time: "6:25pm-10.00pm",
              price: "$98",
              location: "6391 Elgin St. Celina, Del...",
            },
            {
              image: EventMusic2JPG,
              title: "Brooks Davis Live 1",
              date: "Sat, 15 Sept, 2023",
              time: "6:25pm-10.00pm",
              price: "$98",
              location: "6391 Elgin St. Celina, Del...",
            },
            {
              image: EventMusic2JPG,
              title: "Brooks Davis Live 1",
              date: "Sat, 15 Sept, 2023",
              time: "6:25pm-10.00pm",
              price: "$98",
              location: "6391 Elgin St. Celina, Del...",
            },
          ]}
        />
      </Container>
      <Container className={styles.postContainer}>
        <Post
          name="Richard Wallace"
          address="Signal Hill Park · Signal Hill, CA"
          postDate="20/11/2023"
          postComment="Thank you to all of my subscribers for making this tour
					spectacular. I will be adding a private show next week, just for
					you guys! Stay tuned for details!. #WallaceOnTour #W24"
          likeStats={328}
          shareStats={328}
          commentStats={463}
        />
      </Container>
      <Container>
        <CardSmallSection
          title="New Events"
          linkData={{ text: "See all", href: "" }}
          cardData={[
            {
              image: EventMusic2JPG,
              title: "Brooks Davis Live 1",
              date: "15th Dec, 2023",
              time: "10.00pm",
              price: "$98",
            },
            {
              image: EventMusic2JPG,
              title: "Brooks Davis Live 2",
              date: "15th Dec, 2023",
              time: "10.00pm",
              price: "$98",
            },
            {
              image: EventMusic2JPG,
              title: "Brooks Davis Live 3",
              date: "15th Dec, 2023",
              time: "10.00pm",
              price: "$98",
            },
            {
              image: EventMusic2JPG,
              title: "Brooks Davis Live 4",
              date: "15th Dec, 2023",
              time: "10.00pm",
              price: "$98",
            },
          ]}
        />
      </Container>
      <Container>
        <CardFlexSection
          title="Event Near You"
          cardData={[
            {
              image: EventCarnivalJPG,
              title: "Brooks Davis Live",
              date: "Sat, 15 Sept, 2023",
              time: "6:25pm-10.00pm",
              price: "$98",
            },
            {
              image: EventCarnivalJPG,
              title: "Brooks Davis Live",
              date: "Sat, 15 Sept, 2023",
              time: "6:25pm-10.00pm",
              price: "$98",
            },
          ]}
        />
      </Container>
    </>
  );
}

export default Home;
