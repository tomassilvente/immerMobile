// styles
import styles from "./styles.module.css";
// assets
import thumbsUpSVG from "./assets/thumbs-up.svg";
import shareSVG from "./assets/share.svg";
import messageCircleSVG from "./assets/message-circle.svg";
// components
import Image from "next/image";
import { Avatar } from "../Avatar/Avatar";

type PostProps = {
	name: string;
	address: string;
	postDate: string;
	postComment: string;
	likeStats: number;
	shareStats: number;
	commentStats: number;
};

export const Post = ({
	name,
	address,
	postDate,
	postComment,
	likeStats,
	shareStats,
	commentStats,
}: PostProps) => {
	return (
		<div className={styles.section}>
			<div className={styles.personLayout}>
				<Avatar />
				<div className={styles.personDataLayout}>
					<div className={styles.personDataName}>{name}</div>
					<div className={styles.personDataAddress}>{address}</div>
				</div>
				<div className={styles.personPostDate}>{postDate}</div>
			</div>
			<div className={styles.postComment}>{postComment}</div>
			<div className={styles.actionLayout}>
				<div className={styles.action}>
					<Image
						src={thumbsUpSVG}
						className={styles.actionIcon}
						alt="thumbs-up.svg"
					/>
					<span className={styles.actionStats}>{likeStats}</span>
				</div>
				<div className={styles.action}>
					<Image
						src={messageCircleSVG}
						className={styles.actionIcon}
						alt="share.svg"
					/>
					<span className={styles.actionStats}>{shareStats}</span>
				</div>
				<div className={styles.action}>
					<Image
						src={shareSVG}
						className={styles.actionIcon}
						alt="message-circle.svg"
					/>
					<span className={styles.actionStats}>{commentStats}</span>
				</div>
			</div>
		</div>
	);
};
