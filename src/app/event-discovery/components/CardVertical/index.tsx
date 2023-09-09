import Image from "next/image";
import styles from "./styles.module.css";

function CardVertical({ className }: { className: string }) {
	return (
		<div className={`${styles.card} ${className}`}>
			<Image
				className={styles.cardImage}
				width={144}
				height={82}
				src="/assets/event-music-2.svg"
				alt="card-image"
			/>
			<div className={styles.cardBody}>
				<div className={styles.cardTitle}>Brooks Davis Live</div>
				<div className={styles.cardDate}>15th Dec, 2023</div>
				<div className={styles.cardTimePrice}>
					<span className={styles.cardTime}>10.00pm</span>
					<span className={styles.cardPrice}>$98</span>
				</div>
			</div>
		</div>
	);
}

export default CardVertical;
