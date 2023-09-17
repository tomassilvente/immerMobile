import styles from "./styles.module.css";

function Title({ children }: { children: React.ReactNode }) {
	return <div className={styles.title}>{children}</div>;
}

export default Title;