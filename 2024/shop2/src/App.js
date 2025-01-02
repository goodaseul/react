import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

import "./style.css";

import bg from "./img/bg.png";
import data from "./data";
import Home from "./components/Home";
// import Detail from "./components/Detail";
// import Cart from "./components/Cart";

// lazy단점 > 컴포넌트 로딩시간 발생
const Detail = lazy(() => import("./components/Detail"));
const Cart = lazy(() => import("./components/Cart"));

function App() {
    useEffect(() => {
        const watchedList = localStorage.getItem("watched");
        if (watchedList) {
        } else {
            localStorage.setItem("watched", JSON.stringify([]));
        }
    }, []);
    // let obj = { name: "daseul" };
    // localStorage.setItem("data", JSON.stringify(obj));
    // let get = localStorage.getItem("data");
    // console.log(JSON.parse(get));

    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();

    // 성공/실패/로딩 쉽게 파악가능
    // result.data
    // result.loading
    // result.error
    let result = useQuery("userName", () =>
        axios.get(`https://codingapple1.github.io/userdata.json`).then((data) => {
            return data.data;
        })
    );

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
                            <Link to="/detail/0">Detail</Link>
                        </li>
                        <li onClick={() => navigate("/about")}>
                            {/* <Link to="/about">About</Link> */}
                            About
                        </li>
                        <li onClick={() => navigate("/cart")}>Cart</li>
                    </ul>
                </nav>
            </header>
            <Link></Link>
            <Suspense fallback={<div>로딩중</div>}>
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
                    <Route path="/cart" element={<Cart></Cart>} />
                    <Route path="*" element={<div>error 페이지임</div>} />
                </Routes>
            </Suspense>
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
