// styles
import styles from "./styles.module.css";
// assets
import avatarJPG from "./assets/avatar.jpg";
// components
import Image, { StaticImageData } from "next/image";

type AvatarProps = {
	className?: string | StaticImageData;
};

export const Avatar = ({ className = "" }: AvatarProps) => {
	return (
		<div className={`${styles.avatar} ${className}`}>
			<Image
				className={styles.avatarImage}
				src={avatarJPG}
				alt="avatar.jpg"
			/>
		</div>
	);
};
