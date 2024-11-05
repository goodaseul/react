import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Main";
import Coin from "./routes/Detail";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

interface IRouterProps {
    toggleDark: () => void;
    isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Coins toggleDark={toggleDark} />} />
                <Route path="/:coinID" element={<Coin />}>
                    <Route path="chart" element={<Chart isDark={isDark} />} />
                    <Route path="price" element={<Price />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
