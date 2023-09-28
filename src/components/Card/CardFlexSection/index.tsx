// assets
import styles from "./style.module.css";
// components
import { Title } from "../../../common/titles"; 
import { CardFlex, CardFlexProps } from "../CardFlex";

type Props = {
	title: string;
	cardData: Array<CardFlexProps>;
};

export const CardFlexSection = ({ title, cardData }: Props) => {
	return (
		<>
			<Title>{title}</Title>
			{cardData.map((card, i) => {
				return (
					<CardFlex
						key={i}
						className={styles.cardFlex}
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
};
