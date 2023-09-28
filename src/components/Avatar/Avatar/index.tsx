"use client";
import { useRef, useState } from "react";
// styles
import styles from "./styles.module.css";
// assets
import avatarJPG from "./assets/avatar.jpg";
import closeSVG from "./assets/close.svg";
// components
import Image, { StaticImageData } from "next/image";

type AvatarProps = {
	className?: string | StaticImageData;
	labelData?: {
		text: string;
		className?: string;
	};
};

export const Avatar = ({ className = "", labelData }: AvatarProps) => {
	const [isFeedOpen, setIsFeedOpen] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const setFeedOpen = () => {
		videoRef.current?.play();
		setIsFeedOpen(true);
	};

	const setFeedClose = () => {
		if (videoRef.current) {
			videoRef.current.pause();
			videoRef.current.currentTime = 0;
		}
		setIsFeedOpen(false);
	};

	return (
		<>
			<div
				onClick={setFeedOpen}
				className={`${styles.avatar} ${className}`}>
				<Image
					className={styles.avatarImage}
					src={avatarJPG}
					alt="avatar.jpg"
				/>
				{labelData?.text && (
					<span className={`${styles.avatarLabel} ${labelData.className}`}>
						{labelData.text}
					</span>
				)}
			</div>

			<div className={`${styles.feed} ${isFeedOpen && styles.feedShow}`}>
				<video ref={videoRef}>
					<source
						src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
				<Image
					onClick={setFeedClose}
					className={styles.feedClose}
					src={closeSVG}
					alt="close.svg"
				/>
			</div>
		</>
	);
};
