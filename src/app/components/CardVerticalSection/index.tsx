// styles
import styles from "./styles.module.css";
// components
import { Title } from "../Title";
import { NextLink } from "../Link";
import { CardVertical, CardVerticalProps } from "../CardVertical";

type Props = {
	title: string;
	linkData: {
		text: string;
		href: string;
	};
	cardData: Array<CardVerticalProps>;
};

export const CardVerticalSection = ({
	title,
	linkData,
	cardData,
}: Props) => {
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
};
