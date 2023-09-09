// styles
import styles from "./styles.module.css";
// assets
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
				<CardVertical className={styles.cardVertical} />
			</Container>
			<Container>
				<Title>Browse by Category</Title>
				<div className={styles.eventCategory}>
					<ImageBottomText
						src="/assets/event-music.jpg"
						width={132}
						height={97}
						alt="image-bottom-text"
						text="Music"
					/>
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
					<ImageBottomText
						src="/assets/event-theater.jpg"
						width={132}
						height={97}
						alt="image-bottom-text"
						text="Theater"
					/>
				</div>
			</Container>
			<Container>
				<Title>Popular Events</Title>
				<CardHorizontal className={styles.cardHorizontal} />
			</Container>
		</main>
	);
}

export default EventDiscovery;
