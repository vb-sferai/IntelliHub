import {Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "../../../pages/MainPage";
import {SupremeMainPage} from "../../../pages/SupremeMainPage";
import {CaseStudyLancetPage} from "../../../pages/CaseStudyLancet";
import {BasePage} from "../../../pages/BasePage";
import {VibecodingPage} from "../../../pages/VibecodingPage";
import {AgentsPage} from "../../../pages/AgentsPage";
import {PmJobPage} from "../../../pages/JobPages/PmJobPage";
import {ROUTES} from "../../../constants/routes.ts";

export const Pages = () => {
    return (
        <Routes>
            <Route path={ROUTES.root} element={<MainPage />} />
            <Route path={ROUTES.supreme} element={<SupremeMainPage />} />
            <Route path={ROUTES.casestudies} element={<CaseStudyLancetPage />} />
            <Route path={ROUTES.base} element={<BasePage />} />
            <Route path={ROUTES.vibecoding} element={<VibecodingPage />} />
            <Route path={ROUTES.agents} element={<AgentsPage />} />
            <Route path={ROUTES.jobsPm} element={<PmJobPage />} />
        </Routes>
    );
};
