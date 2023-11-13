import { ReCaptchaProvider } from "../../hooks/useContext";
import { Footer } from "./Footer";
import { TopBar } from "./Topbar";
type ChildrenProps = {
    children: React.ReactNode;
};
export function Layout({ children }: ChildrenProps) {
    return (
        <ReCaptchaProvider>
            <header>
                <TopBar />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </ReCaptchaProvider>
    );
}
