import {Pages} from "./Pages.tsx";
import {Header} from "../../Header";
import {Footer} from "../../Footer";
import {useLocation} from "react-router-dom";
import {ROUTES} from "../../../constants/routes.ts";

export const Layout = () => {
    const location = useLocation();
    const hideHeaderFooter = location.pathname === ROUTES.paymentSuccess;

    return (
        <div className="min-h-full flex relative">
            <div className="flex flex-col w-full h-full justify-center" style={{
                // eslint-disable-next-line @typescript-eslint/naming-convention
                // @ts-ignore
                '&::-webkit-scrollbar': {
                    height: '6px',
                },
            }}>
                {!hideHeaderFooter && <Header />}
                <Pages />
                {!hideHeaderFooter && <Footer />}
            </div>
        </div>
    );
};
