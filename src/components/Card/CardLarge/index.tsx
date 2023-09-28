// styles
import styles from "./styles.module.css";
// assets
import calendarSVG from "./assets/calendar.svg";
import clockSVG from "./assets/clock.svg";
import mapPinSVG from "./assets/map-pin.svg";
// components
import Image, { StaticImageData } from "next/image";

export type CardLargeProps = {
	className?: string;
	image: string | StaticImageData;
	title: string;
	date: string;
	time: string;
	price: string;
	location: string;
};

export const CardLarge = ({
	className = "",
	image,
	title,
	date,
	time,
	price,
	location,
}: CardLargeProps) => {
	return (
		<div className={`${styles.card} ${className}`}>
			<div className={styles.cardImage}>
				<Image
					className={styles.cardImageSrc}
					width={144}
					height={82}
					src={image}
					alt="card-image"
				/>
				<div className={styles.cardImageFlex}>
					<div className={styles.cardTitle}>{title}</div>
					<span className={styles.cardPrice}>{price}</span>
				</div>
			</div>
			<div className={styles.cardBody}>
				<div className={styles.cardBodyFlex}>
					<Image
						className={styles.cardBodyIcon}
						src={calendarSVG}
						alt="calendar.svg"
					/>
					<div className={styles.cardBodyText}>{date}</div>
				</div>
				<div className={styles.cardBodyFlex}>
					<Image
						className={styles.cardBodyIcon}
						src={clockSVG}
						alt="calendar.svg"
					/>
					<span className={styles.cardBodyText}>{time}</span>
				</div>
				<div className={styles.cardBodyFlex}>
					<Image
						className={styles.cardBodyIcon}
						src={mapPinSVG}
						alt="calendar.svg"
					/>
					<span className={styles.cardBodyText}>{location}</span>
				</div>
			</div>
		</div>
	);
};
