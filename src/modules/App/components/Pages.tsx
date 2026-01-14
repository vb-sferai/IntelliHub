import {Route, Routes} from "react-router-dom";
import {MainPage} from "../../../pages/MainPage";
import {SupremeMainPage} from "../../../pages/SupremeMainPage";
import {AutomationsRouter} from "../../../pages/AutomationsPage";
import {NotFoundPage} from "../../../pages/NotFoundPage";
import {ROUTES} from "../../../constants/routes.ts";

export const Pages = () => {
    return (
        <Routes>
            <Route path={ROUTES.root} element={<SupremeMainPage />} />
            <Route path={ROUTES.teams} element={<MainPage />} />
            <Route path={ROUTES.automations} element={<AutomationsRouter />} />
            <Route path={ROUTES.notFound} element={<NotFoundPage />} />
        </Routes>
    );
};
