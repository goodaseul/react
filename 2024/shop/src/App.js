/* eslint-disable */
import { lazy, Suspense, useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
//자료
import shopData from "./data";

//components
import Home from "./components/Home";

//lazy loading 굳이 처음부터 보여줄 필요 없는
// 사이트 발행할 때도 별도의 js파일로 분리
// import Detail from "./components/Detail";
// import Cart from "./components/Cart";

const Detail = lazy(() => import("./components/Detail"));
const Cart = lazy(() => import("./components/Cart"));
//css
import "./App.css";

function App() {
    let [shoes, setShoes] = useState(shopData);
    let navigate = useNavigate();
    let [clickPage, setClickPage] = useState(2);
    const [loading, setLoading] = useState(false);

    let axiosButton = () => {
        setLoading(true);
        setClickPage(() => (clickPage += 1));
        axios
            .get(`https://codingapple1.github.io/shop/data${clickPage}.json`)
            .then((result) => {
                let copy = [...shoes, ...result.data]; //result.data 실제로는 json 으로 받아옴 / axios가 array 로 자동으로 바꿔줌
                setLoading(false);
                setShoes(copy);
            })
            .catch(() => {
                setLoading(false);
                console.log("실패실패");
            });

        axios.post();
    };

    useEffect(() => {}, [axiosButton]);

    let obj = { name: "kim" };
    localStorage.setItem("data", JSON.stringify(obj));
    let getOff = localStorage.getItem("data");

    useEffect(() => {
        let getOff = localStorage.getItem("watched");

        if (getOff) {
            getOff = JSON.parse(getOff);
        } else {
            localStorage.setItem("watched", JSON.stringify([]));
        }
    }, []);

    // react-query

    let result = useQuery(["작명"], () => {
        return axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
            return a.data;
        });
        // { staleTime: 2000 } // 2초마다 재요청 가능
    });

    return (
        <div className="App">
            {loading === true ? <p>로딩중입니다.</p> : null}
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand onClick={() => navigate("/")}>Goodaseul</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Link to="/">Home</Link>
                        <Link to="/detail">Detail</Link> */}
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
                        <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
                    </Nav>
                    <div className="ms-auto" style={{ color: "#fff" }}>
                        {result.isLoading && "로딩중"}
                        {result.error && "에러남"}
                        {result.data && result.data.name}
                    </div>
                </Container>
            </Navbar>
            <Suspense fallback={console.log("로딩중임")}>
                <Routes>
                    <Route path="/" element={<Home shoes={shoes} axiosButton={axiosButton} clickPage={clickPage}></Home>} />

                    <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />

                    <Route path="/about" element={<NestedRoutes />}>
                        <Route path="member" element={<h5>난 멤버지롱</h5>} />
                        <Route path="location" element={<h5>난 로케이션이지롱</h5>} />
                    </Route>

                    <Route path="/event" element={<Event />}>
                        <Route path="one" element={<h5>첫 주문 시 양배추즙 서비스</h5>} />
                        <Route path="two" element={<h5>생일기념 쿠폰받기</h5>} />
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<div>e!r!r!o!r</div>} />
                </Routes>
            </Suspense>
        </div>
    );
}

function Event() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    );
}

function NestedRoutes() {
    return (
        <div>
            <h4>Nested Routes</h4>
            <Outlet></Outlet>
        </div>
    );
}

export default App;
