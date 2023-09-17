// assets
import EventMusic2JPG from "../../assets/event-music-2.jpg";
// components
import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import CardVerticalSection from "@/app/components/CardVerticalSection";

function Home() {
	return (
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
	);
}

export default Home;
