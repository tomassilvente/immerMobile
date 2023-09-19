// styles
import styles from "./styles.module.css";
// components
import { Title } from "components/Title";
import { NextLink } from "components/Link";
import { Avatar } from "../Avatar";

type Props = {
	title: string;
	linkData: {
		href: string;
		text: string;
	};
};

export const AvatarSection = ({ title, linkData }: Props) => {
	return (
		<>
			<div className={styles.sliderHeader}>
				<Title>{title}</Title>
				<NextLink href={linkData.href}>{linkData.text}</NextLink>
			</div>
			<div className={styles.slider}>
				<div className={styles.sliderItem}>
					<div className={styles.avatarWrapper}>
						<Avatar className={`${styles.avatar}`} />
					</div>
					<div className={styles.avatarName}>Sheryl Green GreenGreen</div>
				</div>
				<div className={styles.sliderItem}>
					<div className={styles.avatarWrapper}>
						<Avatar className={`${styles.avatar}`} />
					</div>
					<div className={styles.avatarName}>Sheryl Green GreenGreen</div>
				</div>
				<div className={styles.sliderItem}>
					<div className={styles.avatarWrapper}>
						<Avatar className={`${styles.avatar}`} />
					</div>
					<div className={styles.avatarName}>Sheryl Green GreenGreen</div>
				</div>
				<div className={styles.sliderItem}>
					<div className={styles.avatarWrapper}>
						<Avatar className={`${styles.avatar}`} />
					</div>
					<div className={styles.avatarName}>Sheryl Green GreenGreen</div>
				</div>
				<div className={styles.sliderItem}>
					<div className={styles.avatarWrapper}>
						<Avatar className={`${styles.avatar}`} />
					</div>
					<div className={styles.avatarName}>Sheryl Green GreenGreen</div>
				</div>
			</div>
		</>
	);
};
