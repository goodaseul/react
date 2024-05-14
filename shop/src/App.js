/* eslint-disable */
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

//자료
import shopData from "./data";

//components
import Home from "./components/Home";
import Detail from "./components/Detail";

//css
import "./App.css";

function App() {
    let [shoes, setShoes] = useState(shopData);
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Goodaseul</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Link to="/">Home</Link>
                        <Link to="/detail">Detail</Link> */}
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home shoes={shoes}></Home>} />
                <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />

                <Route path="/about" element={<NestedRoutes />}>
                    <Route path="member" element={<h5>난 멤버지롱</h5>} />
                    <Route path="location" element={<h5>난 로케이션이지롱</h5>} />
                </Route>

                <Route path="/event" element={<Event />}>
                    <Route path="one" element={<h5>첫 주문 시 양배추즙 서비스</h5>} />
                    <Route path="two" element={<h5>생일기념 쿠폰받기</h5>} />
                </Route>
                <Route path="*" element={<div>e!r!r!o!r</div>} />
            </Routes>
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
