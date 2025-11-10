import {useLocation} from "react-router-dom";
import {Pages} from "./Pages.tsx";
import {Header} from "../../Header";
import {Footer} from "../../Footer";
import {ROUTES} from "../../../constants/routes.ts";

export const Layout = () => {
    const location = useLocation();
    const isSupremePage = location.pathname === ROUTES.root || location.pathname === ROUTES.customAutomations;

    // Check if current page is 404 (not found in known routes)
    const isNotFoundPage = !Object.values(ROUTES).slice(0, -1).some(route => {
        return location.pathname === route;
    });

    const hideChrome = isSupremePage || isNotFoundPage;

    return (
        <div className="min-h-full flex relative">
            <div className="flex flex-col w-full h-full justify-center" style={{
                // eslint-disable-next-line @typescript-eslint/naming-convention
                // @ts-ignore
                '&::-webkit-scrollbar': {
                    height: '6px',
                },
            }}>
                {!hideChrome && <Header />}
                <Pages />
                {!hideChrome && <Footer />}
            </div>
        </div>
    );
};
