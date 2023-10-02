// styles
import styles from "./styles.module.css";
// assets
import thumbsUpSVG from "./assets/thumbs-up.svg";
import shareSVG from "./assets/share.svg";
import messageCircleSVG from "./assets/message-circle.svg";
// components
import Image from "next/image";
import { Avatar } from "../Avatar/Avatar";

export const Post = ({post}: any) => {
	return (
		<div className={styles.section}>
			<div className={styles.personLayout}>
				<Avatar />
				<div className={styles.personDataLayout}>
					<div className={styles.personDataName}>{post.username}</div>
					<div className={styles.personDataAddress}>{post.postLocation}</div>
				</div>
				<div className={styles.personPostDate}>{post.postDate}</div>
			</div>
			<div className={styles.postComment}>{post.post}</div>
			<div className={styles.actionLayout}>
				<div className={styles.action}>
					<Image
						src={thumbsUpSVG}
						className={styles.actionIcon}
						alt="thumbs-up.svg"
					/>
					<span className={styles.actionStats}>{post.postLikes}</span>
				</div>
				<div className={styles.action}>
					<Image
						src={messageCircleSVG}
						className={styles.actionIcon}
						alt="share.svg"
					/>
					<span className={styles.actionStats}>{post.postComments}</span>
				</div>
				<div className={styles.action}>
					<Image
						src={shareSVG}
						className={styles.actionIcon}
						alt="message-circle.svg"
					/>
					<span className={styles.actionStats}>{post.postShareds}</span>
				</div>
			</div>
		</div>
	);
};
