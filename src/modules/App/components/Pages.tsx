import {Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "../../../pages/MainPage";
import {SupremeMainPage} from "../../../pages/SupremeMainPage";
import {CustomAutomationsPage} from "../../../pages/CustomAutomationsPage";
import {NotFoundPage} from "../../../pages/NotFoundPage";
import {ROUTES} from "../../../constants/routes.ts";

export const Pages = () => {
    return (
        <Routes>
            <Route path={ROUTES.root} element={<SupremeMainPage />} />
            <Route path={ROUTES.teams} element={<MainPage />} />
            <Route path={ROUTES.customAutomations} element={<CustomAutomationsPage />} />
            <Route path={ROUTES.notFound} element={<NotFoundPage />} />
        </Routes>
    );
};
