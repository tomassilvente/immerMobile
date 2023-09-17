// styles
import styles from "./styles.module.css";
// components
import Image, { StaticImageData } from "next/image";

type Props = {
	className: string;
	image: string | StaticImageData;
	title: string;
	date: string;
	time: string;
	price: string;
};

function CardVertical({
	className,
	image,
	title,
	date,
	time,
	price,
}: Props) {
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
}

export default CardVertical;
