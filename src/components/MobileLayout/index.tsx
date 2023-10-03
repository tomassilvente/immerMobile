import styles from "./styles.module.css";
import { Container } from "../Container";
import { BottomNav } from "./BottomNav";

export const MobileLayout = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={`relative max-w-[480px] m-auto`}>
            <Container className={`${className} min-h-screen`}>
                {children}
            </Container>
            <BottomNav />
        </div>
	);
};