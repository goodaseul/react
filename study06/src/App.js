import "./App.css";
import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import EmptyPage from "./components/EmptyPage";

import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<DayList></DayList>} />
                <Route path="/day/:day" element={<Day />} />
                <Route path="*" element={<EmptyPage />} />
            </Routes>
        </div>
    );
}
