// styles
import styles from "./styles.module.css";

export const Title = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.title}>{children}</div>;
};
