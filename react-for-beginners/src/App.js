import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 차이점;
// BrowserRouter 는은 URl 생김새 보통의 웹사이트처럼 생김
// HashRouter 를 사용한다면 조금 다른 #이 생김
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        // 먼저 랜더링 해주고
        <Router>
            {/* Router를 찾는 Routes */}
            <Routes>
                {/* ROUTE 는 URL을 의미 */}
                <Route path="/" element={<Home />}></Route>
                <Route path="/movie" element={<Detail />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
