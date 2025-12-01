import {Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "../../../pages/MainPage";
import {SupremeMainPage} from "../../../pages/SupremeMainPage";
import {CustomAutomationsPage} from "../../../pages/CustomAutomationsPage";
import {CaseStudyLancetPage} from "../../../pages/CaseStudyLancet";
import {CaseStudyYandexPage} from "../../../pages/CaseStudyYandex";
import {CaseStudyUAEPage} from "../../../pages/CaseStudyUAE";
import {BasePage} from "../../../pages/BasePage";
import {VibecodingPage} from "../../../pages/VibecodingPage";
import {EduPage} from "../../../pages/EduPage";
import {AgentsPage} from "../../../pages/AgentsPage";
import {PmJobPage} from "../../../pages/JobPages/PmJobPage";
import {ApplicationPage} from "../../../pages/JobPages/ApplicationPage";
import {NotFoundPage} from "../../../pages/NotFoundPage";
import {NewYearRedirectPage} from "../../../pages/NewYearRedirectPage";
import {ROUTES} from "../../../constants/routes.ts";

export const Pages = () => {
    return (
        <Routes>
            <Route path={ROUTES.root} element={<SupremeMainPage />} />
            <Route path={ROUTES.teams} element={<MainPage />} />
            <Route path={ROUTES.programs} element={<CustomAutomationsPage />} />
            <Route path={ROUTES.casestudiesLancet} element={<CaseStudyLancetPage />} />
            <Route path={ROUTES.casestudiesYandex} element={<CaseStudyYandexPage />} />
            <Route path={ROUTES.casestudiesUAE} element={<CaseStudyUAEPage />} />
            <Route path={ROUTES.base} element={<BasePage />} />
            <Route path={ROUTES.vibecoding} element={<VibecodingPage />} />
            <Route path={ROUTES.edu} element={<EduPage />} />
            <Route path={ROUTES.agents} element={<AgentsPage />} />
            <Route path={ROUTES.jobsPm} element={<PmJobPage />} />
            <Route path={ROUTES.jobsApply} element={<ApplicationPage />} />
            <Route path={ROUTES.newyear2026} element={<NewYearRedirectPage />} />
            <Route path={ROUTES.notFound} element={<NotFoundPage />} />
        </Routes>
    );
};
