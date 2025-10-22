import { HashRouter } from 'react-router-dom';
import {Layout} from "./Layout";

export function App() {
    return (
        <HashRouter>
            <Layout />
        </HashRouter>
    );
}