import styles from "./styles.module.css";

function Container({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={`${styles.container} ${className}`}>{children}</div>
	);
}

export default Container;
