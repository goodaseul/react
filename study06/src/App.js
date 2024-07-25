import "./App.css";
import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import EmptyPage from "./components/EmptyPage";
import CreateDay from "./components/CreateDay";

import { Routes, Route } from "react-router-dom";
import CreateWord from "./components/CreateWord";

export default function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<DayList></DayList>} />
                <Route path="/day/:day" element={<Day />} />
                <Route path="/create_word" element={<CreateWord />} />
                <Route path="/create_day" element={<CreateDay />} />
                <Route path="*" element={<EmptyPage />} />
            </Routes>
        </div>
    );
}
