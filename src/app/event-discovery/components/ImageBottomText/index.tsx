import Image from "next/image";
import styles from "./styles.module.css";

type ImageBottomTextProps = {
	src: string;
	width: number;
	height: number;
	alt: string;
	text: string;
	className?: string;
};

function ImageBottomText({
	src,
	width,
	height,
	alt,
	text,
	className,
}: ImageBottomTextProps) {
	return (
		<div className={`${styles.image} ${className}`}>
			<img
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
