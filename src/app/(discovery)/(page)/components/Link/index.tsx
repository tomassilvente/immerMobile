import Link from "next/link";
import styles from "./styles.module.css";

type LinkProps = {
	href: string;
	children: React.ReactNode;
};

function NextLink({ href, children }: LinkProps) {
	return (
		<Link href={href} className={styles.link}>
			{children}
		</Link>
	);
}

export default NextLink;
