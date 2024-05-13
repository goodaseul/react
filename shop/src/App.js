/* eslint-disable */
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import bg from "./img/bg.png";
import "./App.css";

import shopData from "./data";

function App() {
    let [shoes, setShoes] = useState(shopData);

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Goodaseul</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="container">
                <div className="row">
                    <List shoes={shoes} />
                </div>
            </div>
        </div>
    );
}
function List(props) {
    return (
        <>
            {props.shoes.map((item, index) => {
                return (
                    <div className="col-md-4" key={index}>
                        {/* <img src={process.env.PUBLIC_URL + "/logo192.png"} width="80%" /> */}
                        <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} width="80%" />
                        <h4>{item.title}</h4>
                        <p>{item.content}</p>
                        <p>{item.price}</p>
                    </div>
                );
            })}
        </>
    );
}

export default App;
