import Image from "next/image";
import styles from "./styles.module.css";

function CardHorizontal({ className }: { className?: string }) {
	return (
		<div className={`${styles.card} ${className}`}>
			<div className={styles.cardImage}>
				<img src="/assets/event-carnival.svg" alt="" />
			</div>
			<div className={styles.cardData}>
				<div className={styles.cardTitle}>Brooks Davis Live</div>
				<div>
					<span></span>
					<span className={styles.cardDate}>Sat, 15 Sept, 2023</span>
				</div>
				<div>
					<span></span>
					<span className={styles.cardTime}>6:25pm-10.00pm</span>
				</div>
				<div className={styles.cardPrice}>Price: $98</div>
			</div>
			<div className="">:</div>
		</div>
	);
}

export default CardHorizontal;
