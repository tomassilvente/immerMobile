// styles
import styles from "./styles.module.css";
// assets
import magnifySVG from "./assets/magnify.svg";
// components
import Image from "next/image";

type InputProps = {
	placeholder?: string;
};

export const InputSearch = ({ placeholder }: InputProps) => {
	return (
		<div className={styles.inputGroup}>
			<Image className={styles.icon} src={magnifySVG} alt="magnify.svg" />
			<input className={styles.input} placeholder={placeholder} />
		</div>
	);
};
