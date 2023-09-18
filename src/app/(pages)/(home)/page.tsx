// styles
import styles from "./styles.module.css";
// assets
import EventMusic2JPG from "../../assets/event-music-2.jpg";
import EventCarnivalJPG from "../../assets/event-carnival.jpg";
// components
import { Container } from "@/app/components/Container";
import { Title } from "@/app/components/Title";
import { CardVerticalSection } from "@/app/components/CardVerticalSection";
import { CardHorizontalSection } from "@/app/components/CardHorizontalSection";
import { Post } from "./components/Post";

function Home() {
	return (
		<>
			<Container className={styles.postContainer}>
				<Post />
			</Container>
			<Container>
				<CardVerticalSection
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
				<CardHorizontalSection
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
