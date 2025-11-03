import {Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "../../../pages/MainPage";
import {SupremeMainPage} from "../../../pages/SupremeMainPage";
import {CaseStudyLancetPage} from "../../../pages/CaseStudyLancet";
import {ROUTES} from "../../../constants/routes.ts";

export const Pages = () => {
    return (
        <Routes>
            <Route path={ROUTES.root} element={<MainPage />} />
            <Route path={ROUTES.supreme} element={<SupremeMainPage />} />
            <Route path={ROUTES.casestudies} element={<CaseStudyLancetPage />} />
        </Routes>
    );
};
