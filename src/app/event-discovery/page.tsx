// styles
import styles from "./styles.module.css";
// assets
import carnivalJPG from "./assets/carnival.jpg";
import locationSVG from "./assets/location.svg";
import calendarSVG from "./assets/calendar.svg";
// components
import Image from "next/image";
import Title from "./components/Title";
import CardHorizontal from "./components/CardHorizontal";
import CardVertical from "./components/CardVertical";
import Input from "./components/Input";
import NextLink from "./components/Link";
import ImageBottomText from "./components/ImageBottomText";

function Container({ children }: { children: React.ReactNode }) {
	return <div className={styles.container}>{children}</div>;
}

function EventDiscovery() {
	return (
		<main className={styles.main}>
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
							src="/assets/event-music.jpg"
							width={132}
							height={97}
							alt="image-bottom-text"
							text="Music"
						/>
						<ImageBottomText
							src="/assets/event-theater.jpg"
							width={132}
							height={97}
							alt="image-bottom-text"
							text="Theater"
						/>
					</div>
					<div className={styles.sliderCategoryItem}>
						<ImageBottomText
							src="/assets/event-comedy.jpg"
							width={132}
							height={97}
							alt="image-bottom-text"
							text="Comedy"
						/>
						<ImageBottomText
							src="/assets/event-sport.jpg"
							width={132}
							height={97}
							alt="image-bottom-text"
							text="Sport"
						/>
					</div>
					<div className={styles.sliderCategoryItem}>
						<ImageBottomText
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
					image="/assets/event-carnival.svg"
					title="Brooks Davis Live"
					date="Sat, 15 Sept, 2023"
					time="6:25pm-10.00pm"
					price="$98"
				/>
			</Container>
		</main>
	);
}

export default EventDiscovery;
