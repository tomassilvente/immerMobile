// styles
import styles from "./styles.module.css";
// components
import Title from "./components/Title";
import CardHorizontal from "./components/CardHorizontal";
import CardVertical from "./components/CardVertical";
import Input from "./components/Input";
import NextLink from "./components/Link";

function Container({ children }: { children: React.ReactNode }) {
	return <div className={styles.container}>{children}</div>;
}

function EventDiscovery() {
	return (
		<main className={styles.main}>
			<Container>
				<div className="flex justify-between">
					<div>
						<span></span>
						<span className={styles.eventLocation}>
							New York City, USA
						</span>
					</div>
					<div>
						<span></span>
						<span className={styles.eventDate}>Dec 15</span>
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
				<div>
					<img src="" alt="" />
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
