import {useLocation} from "react-router-dom";
import {Pages} from "./Pages.tsx";
import {Header} from "../../Header";
import {Footer} from "../../Footer";
import {ROUTES} from "../../../constants/routes.ts";

export const Layout = () => {
    const location = useLocation();
    const isSupremePage = location.pathname === ROUTES.root;
    const isCaseStudyLancetPage = location.pathname === ROUTES.casestudiesLancet;
    const isCaseStudyYandexPage = location.pathname === ROUTES.casestudiesYandex;
    const isProgramsPage = location.pathname === ROUTES.programs;
    const isPmJobPage = location.pathname === ROUTES.jobsPm;
    const isJobApplicationPage = location.pathname.includes('/jobs/') && location.pathname.includes('/apply');
    const isNotFoundPage = !Object.values(ROUTES).slice(0, -1).some(route => {
        if (route.includes(':')) {
            const baseRoute = route.split(':')[0];
            return location.pathname.startsWith(baseRoute);
        }
        return location.pathname === route;
    });
    const hideChrome = isSupremePage || isCaseStudyLancetPage || isCaseStudyYandexPage || isProgramsPage || isPmJobPage || isJobApplicationPage || isNotFoundPage;

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
