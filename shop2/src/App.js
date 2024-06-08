import "./style.css";

import bg from "./img/bg.png";
import data from "./data";
import Home from "./components/Home";
import Detail from "./components/Detail";

import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();
    return (
        <div className="App">
            <header>
                <h1 className="logo">goodaseul</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/detail">Detail</Link>
                        </li>
                        <li onClick={() => navigate("/about")}>
                            {/* <Link to="/about">About</Link> */}
                            About
                        </li>
                    </ul>
                </nav>
            </header>
            <Link></Link>
            <Routes>
                <Route path="/" element={<Home setShoes={setShoes} shoes={shoes} bg={bg}></Home>} />
                <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />
                <Route path="/about" element={<About></About>}>
                    <Route path="member" element={<div>어바웃 안에 멤버 페이지임</div>} />
                </Route>
                <Route path="/event" element={<Event></Event>}>
                    <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
                    <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
                </Route>
                <Route path="*" element={<div>error 페이지임</div>} />
            </Routes>
        </div>
    );
}

const About = () => {
    return (
        <>
            <h2>어바웃 페이지임</h2>
            <Outlet></Outlet>
        </>
    );
};

const Event = () => {
    return (
        <>
            <h2 style={{ marginBottom: "5vw" }}>오늘의 이벤트</h2>
            <div style={{ marginBottom: "5vw" }}>
                <Link to="/event/" className="btn">
                    돌아가기
                </Link>
                <Link to="/event/one" className="btn">
                    ONE
                </Link>
                <Link to="/event/two" className="btn">
                    TWO
                </Link>
            </div>
            <Outlet></Outlet>
        </>
    );
};

export default App;
