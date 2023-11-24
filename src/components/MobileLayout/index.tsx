import styles from "./styles.module.css";
import { BottomNav } from "./BottomNav";

export const MobileLayout = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<main className={`font-Inter relative max-w-[480px] m-auto`}>
            <section className={`${className} min-h-screen`}>
                {children}
            </section>
            <BottomNav />
        </main>
	);
};