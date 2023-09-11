"use client";
// hooks
import { useRouter } from "next/navigation";
// styles
import styles from "./styles.module.css";
// assets
import locationSVG from "./assets/location.svg";
import calendarSVG from "./assets/calendar.svg";
import EventCarnivalJPG from "../assets/event-carnival.jpg";
import EventMusicJPG from "../assets/event-music.jpg";
// components
import Image from "next/image";
import Container from "../components/Container";
import Title from "../components/Title";
import CardHorizontal from "../components/CardHorizontal";
import CardVertical from "./components/CardVertical";
import Input from "./components/Input";
import NextLink from "./components/Link";
import ImageBottomText from "./components/ImageBottomText";

function Discovery() {
	const router = useRouter();

	return (
		<>
			<Container>
				<div className="flex justify-between">
					<div className={styles.eventLocation}>
						<Image
							className={styles.eventLocationIcon}
							src={locationSVG}
							alt="location.svg"
						/>
						<span className={styles.eventLocationText}>
							New York City, USA
						</span>
					</div>
					<div className={styles.eventDate}>
						<Image
							className={styles.eventDateIcon}
							src={calendarSVG}
							alt="calendar.svg"
						/>
						<span className={styles.eventDateText}>Dec 15</span>
					</div>
				</div>
			</Container>
			<Container>
				<span></span>
				<Input placeholder="Search for artists, venues, and events" />
			</Container>
			<Container>
				<div className="flex justify-between">
					<Title>Nearby Events (9)</Title>
					<NextLink href="">See All</NextLink>
				</div>
				<div className={styles.sliderNearby}>
					<CardVertical
						className={`${styles.cardVertical} ${styles.sliderNearbyItem}`}
						image="/assets/event-music-2.svg"
						title="Brooks Davis Live 1"
						date="15th Dec, 2023"
						time="10.00pm"
						price="$98"
					/>
					<CardVertical
						className={`${styles.cardVertical} ${styles.sliderNearbyItem}`}
						image="/assets/event-music-2.svg"
						title="Brooks Davis Live 2"
						date="15th Dec, 2023"
						time="10.00pm"
						price="$98"
					/>
					<CardVertical
						className={`${styles.cardVertical} ${styles.sliderNearbyItem}`}
						image="/assets/event-music-2.svg"
						title="Brooks Davis Live 3"
						date="15th Dec, 2023"
						time="10.00pm"
						price="$98"
					/>
					<CardVertical
						className={`${styles.cardVertical} ${styles.sliderNearbyItem}`}
						image="/assets/event-music-2.svg"
						title="Brooks Davis Live 4"
						date="15th Dec, 2023"
						time="10.00pm"
						price="$98"
					/>
					<CardVertical
						className={`${styles.cardVertical} ${styles.sliderNearbyItem}`}
						image="/assets/event-music-2.svg"
						title="Brooks Davis Live 5"
						date="15th Dec, 2023"
						time="10.00pm"
						price="$98"
					/>
				</div>
			</Container>
			<Container>
				<Title>Browse by Category</Title>
				<div className={styles.sliderCategory}>
					<div className={styles.sliderCategoryItem}>
						<ImageBottomText
							onClick={() => router.push("/discovery/music")}
							className={styles.sliderCategoryComponent}
							src={EventMusicJPG}
							width={132}
							height={97}
							alt="image-bottom-text"
							text="Music"
						/>
						<ImageBottomText
							onClick={() => router.push("/discovery/theater")}
							className={styles.sliderCategoryComponent}
							src="/assets/event-theater.jpg"
							width={132}
							height={97}
							alt="image-bottom-text"
							text="Theater"
						/>
					</div>
					<div className={styles.sliderCategoryItem}>
						<ImageBottomText
							onClick={() => router.push("/discovery/theater")}
							className={styles.sliderCategoryComponent}
							src="/assets/event-comedy.jpg"
							width={132}
							height={97}
							alt="image-bottom-text"
							text="Comedy"
						/>
						<ImageBottomText
							onClick={() => router.push("/discovery/sport")}
							className={styles.sliderCategoryComponent}
							src="/assets/event-sport.jpg"
							width={132}
							height={97}
							alt="image-bottom-text"
							text="Sport"
						/>
					</div>
					<div className={styles.sliderCategoryItem}>
						<ImageBottomText
							onClick={() => router.push("/discovery/circus")}
							className={styles.sliderCategoryComponent}
							src="/assets/event-circus.jpg"
							width={132 * 2}
							height={97}
							alt="image-bottom-text"
							text="Circus"
						/>
					</div>
				</div>
			</Container>
			<Container>
				<Title>Popular Events</Title>
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

export default Discovery;
