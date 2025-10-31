import {Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "../../../pages/MainPage";
import {SupremeMainPage} from "../../../pages/SupremeMainPage";
import {ROUTES} from "../../../constants/routes.ts";

export const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={ROUTES.supreme} replace />} />
            <Route path={ROUTES.supreme} element={<SupremeMainPage />} />
            <Route path={ROUTES.home} element={<MainPage />} />
        </Routes>
    );
};
