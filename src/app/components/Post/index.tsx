// styles
import styles from "./styles.module.css";
// assets
import thumbsUpSVG from "./assets/thumbs-up.svg";
import shareSVG from "./assets/share.svg";
import messageCircleSVG from "./assets/message-circle.svg";
// components
import Image from "next/image";
import { Avatar } from "../Avatar";

export const Post = () => {
	return (
		<div className={styles.section}>
			<div className={styles.personLayout}>
				<Avatar />
				<div className={styles.personDataLayout}>
					<div className={styles.personDataName}>Richard Wallace</div>
					<div className={styles.personDataAddress}>
						Signal Hill Park · Signal Hill, CA
					</div>
				</div>
				<div className={styles.personPostDate}>20/11/2023</div>
			</div>
			<div className={styles.postComment}>
				Thank you to all of my subscribers for making this tour
				spectacular. I will be adding a private show next week, just for
				you guys! Stay tuned for details!. #WallaceOnTour #W24
			</div>
			<div className={styles.actionLayout}>
				<div className={styles.action}>
					<Image
						src={thumbsUpSVG}
						className={styles.actionIcon}
						alt="thumbs-up.svg"
					/>
					<span className={styles.actionStats}>17,328</span>
				</div>
				<div className={styles.action}>
					<Image
						src={messageCircleSVG}
						className={styles.actionIcon}
						alt="share.svg"
					/>
					<span className={styles.actionStats}>171</span>
				</div>
				<div className={styles.action}>
					<Image
						src={shareSVG}
						className={styles.actionIcon}
						alt="message-circle.svg"
					/>
					<span className={styles.actionStats}>463</span>
				</div>
			</div>
		</div>
	);
};
