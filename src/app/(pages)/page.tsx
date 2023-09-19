// styles
import styles from "./styles.module.css";
// assets
import EventMusic2JPG from "../assets/event-music-2.jpg";
import EventCarnivalJPG from "../assets/event-carnival.jpg";
// components
import { Container } from "components/Container";
import { Title } from "components/Title";
import { CardSmallSection } from "components/Card/CardSmallSection";
import { CardFlexSection } from "components/Card/CardFlexSection";
import { Post } from "components/Post";
import { CardLargeSection } from "components/Card/CardLargeSection";

function Home() {
	return (
		<>
			<Container>
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
				<Post />
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
