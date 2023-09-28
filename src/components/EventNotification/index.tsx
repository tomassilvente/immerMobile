// styles
import styles from "./styles.module.css";
// assets
import bellSVG from "./assets/bell.svg";
// components
import Image from "next/image";

export const EventNotification = () => {
	return (
		<div className={styles.notif}>
			<Image className={styles.notifIcon} src={bellSVG} alt="bell.svg" />
			<span className={styles.notifStats}>2</span>
		</div>
	);
};
