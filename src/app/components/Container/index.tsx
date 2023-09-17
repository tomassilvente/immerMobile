import styles from "./styles.module.css";

export const Container = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={`${styles.container} ${className}`}>{children}</div>
	);
};
