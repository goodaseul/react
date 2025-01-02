import "./App.css";
import Header from "./components/Header";
import DayList from "./components/DayList.tsx";
import Day from "./components/Day.tsx";
import EmptyPage from "./components/EmptyPage";
import CreateDay from "./components/CreateDay";

import { Routes, Route } from "react-router-dom";
import CreateWord from "./components/CreateWord.tsx";

export default function App() {
    return (
        <div className="App">
            {/* 1. npm install -g json-server 2. json-server --watch ./src/db/data.json --port 3001 */}
            {/* 타입스크립트 npm install typescript @types/node @types/react @types/react-dom @types/jest @types/react-router-dom  */}
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
