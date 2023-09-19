// styles
import styles from "./styles.module.css";
// assets
import avatarJPG from "./assets/avatar.jpg";
// components
import Image from "next/image";

export const Avatar = () => {
	return (
		<div className={styles.avatar}>
			<Image
				className={styles.avatarImage}
				src={avatarJPG}
				alt="avatar.jpg"
			/>
		</div>
	);
};
