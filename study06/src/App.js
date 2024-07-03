import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";

export default function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/about">About</Link>&nbsp;|&nbsp;
                <Link to="/counter">Counter</Link>&nbsp;|&nbsp;
                <Link to="/input">Input</Link>&nbsp;|&nbsp;
                <Link to="/input2">Input2</Link>&nbsp;|&nbsp;
                <Link to="/list">List</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/input" element={<Input />} />
                <Route path="/input2" element={<Input2 />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </div>
    );
}
