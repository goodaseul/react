import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Counter from "./pages/Counter";
// import Input from "./pages/Input";
// import Input2 from "./pages/Input2";
// import List from "./pages/List";
// import Hello from "./components/Hello";

import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
export default function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/" element={<DayList />} />
                <Route path="/day/:day" element={<Day />} />
            </Routes>
            {/* <nav>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/about">About</Link>&nbsp;|&nbsp;
                <Link to="/counter">Counter</Link>&nbsp;|&nbsp;
                <Link to="/input">Input</Link>&nbsp;|&nbsp;
                <Link to="/input2">Input2</Link>&nbsp;|&nbsp;
                <Link to="/list">List</Link>&nbsp;|&nbsp;
                <Link to="/hello">Hello</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/input" element={<Input />} />
                <Route path="/input2" element={<Input2 />} />
                <Route path="/list" element={<List />} />
                <Route path="/hello" element={<Hello />} />
            </Routes>

            <h3>props : properties</h3>

            <Hello age={10} />
            <Hello age={20} />
            <Hello age={30} /> */}
        </div>
    );
}
