// styles
import styles from "./styles.module.css";
// components
import Image, { StaticImageData } from "next/image";

export type CardSmallProps = {
	className?: string;
	image: string | StaticImageData;
	title: string;
	date: string;
	time: string;
	price: string;
};

export const CardSmall = ({
	className = "",
	image,
	title,
	date,
	time,
	price,
}: CardSmallProps) => {
	return (
		<div className={`${styles.card} ${className}`}>
			<Image
				className={styles.cardImage}
				width={144}
				height={82}
				src={image}
				alt="card-image"
			/>
			<div className={styles.cardBody}>
				<div className={styles.cardTitle}>{title}</div>
				<div className={styles.cardDate}>{date}</div>
				<div className={styles.cardTimePrice}>
					<span className={styles.cardTime}>{time}</span>
					<span className={styles.cardPrice}>{price}</span>
				</div>
			</div>
		</div>
	);
};
