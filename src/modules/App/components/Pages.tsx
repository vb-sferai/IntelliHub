import {Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "../../../pages/MainPage";
import {SupremeMainPage} from "../../../pages/SupremeMainPage";
import {CustomAutomationsPage} from "../../../pages/CustomAutomationsPage";
import {CaseStudyLancetPage} from "../../../pages/CaseStudyLancet";
import {BasePage} from "../../../pages/BasePage";
import {VibecodingPage} from "../../../pages/VibecodingPage";
import {AgentsPage} from "../../../pages/AgentsPage";
import {PmJobPage} from "../../../pages/JobPages/PmJobPage";
import {ApplicationPage} from "../../../pages/JobPages/ApplicationPage";
import {NotFoundPage} from "../../../pages/NotFoundPage";
import {ROUTES} from "../../../constants/routes.ts";

export const Pages = () => {
    return (
        <Routes>
            <Route path={ROUTES.root} element={<SupremeMainPage />} />
            <Route path={ROUTES.teams} element={<MainPage />} />
            <Route path={ROUTES.programs} element={<CustomAutomationsPage />} />
            <Route path={ROUTES.casestudies} element={<CaseStudyLancetPage />} />
            <Route path={ROUTES.base} element={<BasePage />} />
            <Route path={ROUTES.vibecoding} element={<VibecodingPage />} />
            <Route path={ROUTES.agents} element={<AgentsPage />} />
            <Route path={ROUTES.jobsPm} element={<PmJobPage />} />
            <Route path={ROUTES.jobsApply} element={<ApplicationPage />} />
            <Route path={ROUTES.notFound} element={<NotFoundPage />} />
        </Routes>
    );
};
