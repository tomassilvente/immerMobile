import styles from "./styles.module.css";

type InputProps = {
	placeholder?: string;
};

function Input({ placeholder }: InputProps) {
	return <input className={styles.input} placeholder={placeholder} />;
}

export default Input;
