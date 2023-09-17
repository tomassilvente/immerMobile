import { MouseEventHandler } from "react";
// styles
import styles from "./styles.module.css";
// components
import Image, { StaticImageData } from "next/image";

type ImageBottomTextProps = {
	className?: string;
	src: string | StaticImageData;
	width: number;
	height: number;
	alt: string;
	text: string;
	onClick?: MouseEventHandler;
};

function ImageBottomText({
	className = "",
	src,
	width,
	height,
	alt,
	text,
	onClick,
}: ImageBottomTextProps) {
	return (
		<div onClick={onClick} className={`${styles.image} ${className}`}>
			<Image
				className={styles.imageSrc}
				src={src}
				width={width}
				height={height}
				alt={alt}
			/>
			<div className={styles.imageText}>{text}</div>
		</div>
	);
}

export default ImageBottomText;
