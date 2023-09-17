// assets
import styles from "./style.module.css";
// components
import { StaticImageData } from "next/image";
import Title from "../Title";
import CardHorizontal from "../CardHorizontal";

type Props = {
	title: string;
	cardData: Array<{
		image: string | StaticImageData;
		title: string;
		date: string;
		time: string;
		price: string;
	}>;
};

function CardHorizontalSection({ title, cardData }: Props) {
	return (
		<>
			<Title>{title}</Title>
			{cardData.map((card, i) => {
				return (
					<CardHorizontal
						key={i}
						className={styles.cardHorizontal}
						image={card.image}
						title={card.title}
						date={card.date}
						time={card.time}
						price={card.price}
					/>
				);
			})}
		</>
	);
}

export default CardHorizontalSection;
