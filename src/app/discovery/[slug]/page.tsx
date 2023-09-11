"use client";
// assets
import EventMusicJPG from "../assets/event-music.jpg";
import EventCarnivalJPG from "../assets/event-carnival.jpg";
// styles
import styles from "./styles.module.css";
// components
import Container from "../components/Container";
import Title from "../components/Title";
import CardHorizontal from "../components/CardHorizontal";
import Image from "next/image";

function DiscoveryCategory() {
	return (
		<>
			<Container className={styles.imageCover}>
				<Image
					className={styles.imageSrc}
					src={EventMusicJPG}
					height={328}
					alt="image-jumbo"
				/>
				<div className={styles.imageText}>Music</div>
			</Container>
			<Container>
				<Title>All Concerts</Title>
			</Container>
			<Container>
				<CardHorizontal
					className={styles.cardHorizontal}
					image={EventCarnivalJPG}
					title="Brooks Davis Live"
					date="Sat, 15 Sept, 2023"
					time="6:25pm-10.00pm"
					price="$98"
				/>
				<CardHorizontal
					className={styles.cardHorizontal}
					image={EventCarnivalJPG}
					title="Brooks Davis Live"
					date="Sat, 15 Sept, 2023"
					time="6:25pm-10.00pm"
					price="$98"
				/>
				<CardHorizontal
					className={styles.cardHorizontal}
					image={EventCarnivalJPG}
					title="Brooks Davis Live"
					date="Sat, 15 Sept, 2023"
					time="6:25pm-10.00pm"
					price="$98"
				/>
			</Container>
		</>
	);
}

export default DiscoveryCategory;
