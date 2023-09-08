import Title from "./components/Title";
import CardHorizontal from "./components/CardHorizontal";
import styles from "./styles.module.css";

function Container({ children }: { children: React.ReactNode }) {
	return <div className={styles.container}>{children}</div>;
}

function EventDiscovery() {
	return (
		<>
			<Container>
        <div className="flex justify-between">
          <div>
            <span></span>
            <span>New York City, USA</span>
          </div>
          <div>
            <span></span>
            <span>Dec 15</span>
          </div>
        </div>
			</Container>
			<Container>
				<span></span>
				<input />
			</Container>
			<Container>
				<div className="flex justify-between">
					<Title>Nearby Events (9)</Title>
					<div>See All</div>
				</div>
				<div>
					<img src="" alt="" />
					<div>Brooks Davis Live</div>
					<div>15th Dec, 2023</div>
					<div className="flex justify-between">
						<span>10.00pm</span>
						<span>$98</span>
					</div>
				</div>
			</Container>
			<Container>
				<Title>Browse by Category</Title>
				<div>
					<img src="" alt="" />
				</div>
			</Container>
			<Container>
				<Title>Popular Events</Title>
				<CardHorizontal />
			</Container>
		</>
	);
}

export default EventDiscovery;
