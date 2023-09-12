import styles from "./styles.module.css";

type Props = {
	className?: string;
	day: string;
	date: string;
};

function Date({ className = "", day, date }: Props) {
	return (
		<>
			<div className={`${styles.date} ${className} ${styles.dateActive}`}>
				<div className={styles.dateDay}>{day}</div>
				<div className={styles.dateDate}>{date}</div>
			</div>
		</>
	);
}

export default Date;
