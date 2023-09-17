// styles
import styles from "./styles.module.css";
// components
import Title from "../Title";
import NextLink from "../Link";
import CardVertical from "../CardVertical";
import { StaticImageData } from "next/image";

type Props = {
	title: string;
	linkData: {
		text: string;
		href: string;
	};
	cardData: Array<{
		image: string | StaticImageData;
		title: string;
		date: string;
		time: string;
		price: string;
	}>;
};

function CardVerticalSection({ title, linkData, cardData }: Props) {
	return (
		<>
			<div className={styles.sliderHeader}>
				<Title>{title}</Title>
				<NextLink href={linkData.href}>{linkData.text}</NextLink>
			</div>
			<div className={styles.slider}>
				{cardData.map((card, i) => {
					return (
						<CardVertical
							key={i}
							className={`${styles.cardVertical} ${styles.sliderItem}`}
							image={card.image}
							title={card.title}
							date={card.date}
							time={card.time}
							price={card.price}
						/>
					);
				})}
			</div>
		</>
	);
}

export default CardVerticalSection;
