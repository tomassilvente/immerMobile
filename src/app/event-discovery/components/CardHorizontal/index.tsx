// styles
import styles from "./styles.module.css";
// assets
import calendarSVG from "./assets/calendar.svg";
import clockSVG from "./assets/clock.svg";
import moreSVG from "./assets/more.svg";
// components
import Image, { StaticImageData } from "next/image";

type Props = {
	className: string;
	image: string | StaticImageData;
	title: String;
	date: String;
	time: String;
	price: String;
};

function CardHorizontal({
	className,
	image,
	title,
	date,
	time,
	price,
}: Props) {
	return (
		<div className={`${styles.card} ${className}`}>
			<div className={styles.cardImage}>
				<Image width={94} height={94} src={image} alt="card-image" />
			</div>
			<div className={styles.cardData}>
				<div className={styles.cardTitle}>{title}</div>
				<div className={styles.cardDate}>
					<Image
						className={styles.cardDateIcon}
						src={calendarSVG}
						alt="calendar.svg"
					/>
					<span className={styles.cardDateText}>{date}</span>
				</div>
				<div className={styles.cardTime}>
					<Image
						className={styles.cardTimeIcon}
						src={clockSVG}
						alt="calendar.svg"
					/>
					<span className={styles.cardTimeText}>{time}</span>
				</div>
				<div className={styles.cardPrice}>
					Price: <span>{price}</span>
				</div>
			</div>
			<div className={styles.cardOptions}>
				<Image src={moreSVG} alt="more.svg" />
			</div>
		</div>
	);
}

export default CardHorizontal;
