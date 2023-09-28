// styles
import styles from "./styles.module.css";
// components
import Link from "next/link";

type LinkProps = {
	href: string;
	children: React.ReactNode;
};

export const NextLink = ({ href, children }: LinkProps) => {
	return (
		<Link href={href} className={styles.link}>
			{children}
		</Link>
	);
};
