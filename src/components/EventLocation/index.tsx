// styles
import styles from "./styles.module.css";
// assets
import locationSVG from "./assets/calendar.svg";
// components
import Image from "next/image";

export const EventLocation = () => {
	return (
		<div className={styles.eventLocation}>
			<Image
				className={styles.eventLocationIcon}
				src={locationSVG}
				alt="location.svg"
			/>
			<span className={styles.eventLocationText}>New York City, USA</span>
		</div>
	);
};
