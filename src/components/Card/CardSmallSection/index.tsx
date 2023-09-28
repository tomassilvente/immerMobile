// styles
import styles from "./styles.module.css";
// components
import { Title } from "../../../common/titles"; 
import { NextLink } from "../../Link";
import { CardSmall, CardSmallProps } from "../CardSmall";

type Props = {
	title: string;
	linkData: {
		text: string;
		href: string;
	};
	cardData: Array<CardSmallProps>;
};

export const CardSmallSection = ({ title, linkData, cardData }: Props) => {
	return (
		<>
			<div className={styles.sliderHeader}>
				<Title>{title}</Title>
				<NextLink href={linkData.href}>{linkData.text}</NextLink>
			</div>
			<div className={styles.slider}>
				{cardData.map((card, i) => {
					return (
						<CardSmall
							key={i}
							className={`${styles.card} ${styles.sliderItem}`}
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
};
