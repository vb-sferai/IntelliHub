import {useLocation} from "react-router-dom";
import {Pages} from "./Pages.tsx";
import {Header} from "../../Header";
import {Footer} from "../../Footer";
import {ROUTES} from "../../../constants/routes.ts";
import {useAnalytics} from "../../../hooks/useAnalytics.ts";

export const Layout = () => {
    const location = useLocation();

    // Инициализация аналитики и UTM-трекинга
    useAnalytics();
    const isSupremePage = location.pathname === ROUTES.root;
    const isReviewsPage = location.pathname === ROUTES.reviews;
    const isCasesPage = location.pathname === ROUTES.cases;
    const isCaseStudyLancetPage = location.pathname === ROUTES.casestudiesLancet;
    const isCaseStudyYandexPage = location.pathname === ROUTES.casestudiesYandex;
    const isCaseStudyGoBeyondPage = location.pathname === ROUTES.casestudiesGoBeyond;
    const isCaseStudyUAEPage = location.pathname === ROUTES.casestudiesUAE;
    const isCaseStudyNubesPage = location.pathname === ROUTES.casestudiesNubes;
    const isProgramsPage = location.pathname === ROUTES.programs;
    const isPmJobPage = location.pathname === ROUTES.jobsPm;
    const isJobApplicationPage = location.pathname.includes('/jobs/') && location.pathname.includes('/apply');
    const isNewYearRedirectPage = location.pathname === ROUTES.newyear2026;
    const isSurveyPage = location.pathname === ROUTES.survey;
    const isNotFoundPage = !Object.values(ROUTES).slice(0, -1).some(route => {
        if (route.includes(':')) {
            const baseRoute = route.split(':')[0];
            return location.pathname.startsWith(baseRoute);
        }
        return location.pathname === route;
    });
    const hideChrome = isSupremePage || isReviewsPage || isCasesPage || isCaseStudyLancetPage || isCaseStudyYandexPage || isCaseStudyGoBeyondPage || isCaseStudyUAEPage || isCaseStudyNubesPage || isProgramsPage || isPmJobPage || isJobApplicationPage || isNewYearRedirectPage || isSurveyPage || isNotFoundPage;

    return (
        <div className="min-h-full flex relative">
            <div className="flex flex-col w-full h-full justify-center">
                {!hideChrome && <Header />}
                <Pages />
                {!hideChrome && <Footer />}
            </div>
        </div>
    );
};
