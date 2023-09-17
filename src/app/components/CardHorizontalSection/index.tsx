// assets
import styles from "./style.module.css";
// components
import { Title } from "../Title";
import { CardHorizontal, CardHorizontalProps } from "../CardHorizontal";

type Props = {
	title: string;
	cardData: Array<CardHorizontalProps>;
};

export const CardHorizontalSection = ({ title, cardData }: Props) => {
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
};
