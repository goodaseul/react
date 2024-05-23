/*eslint-disable*/
import { useState } from "react";
import "./App.css";

function App() {
    let [headline, setHeadline] = useState(["220523_", "230523_", "240523_"]);
    let [like, setLike] = useState(0);
    let [isModal, setIsModal] = useState(false);
    function likeClick() {
        setLike((like += 1));
    }
    function changeHeadline() {
        let copy = [...headline];
        copy[0] = "change";
        setHeadline(copy);
    }
    function changeHeadlineBack() {
        let copy = [...headline];
        copy[0] = "220523_";
        setHeadline(copy);
    }
    function changeHeadlineSort() {
        let copy = [...headline];
        console.log("click");
        copy.sort((a, b) => {
            if (!isNaN(a) && !isNaN(b)) return b - a;
            var a = a.toString();
            var b = b.toString();
            return b < a ? -1 : b == a ? 0 : 1;
        });
        setHeadline(copy);
    }
    function modalShow() {
        setIsModal((isModal = true));
    }
    function modalHide() {
        setIsModal((isModal = false));
    }
    return (
        <div className="App">
            <div className="black_nav">
                <h1>B L O G !</h1>
            </div>
            {headline.map((item, index) => {
                return (
                    <div className="list" key={index}>
                        <h2 className="headline" onClick={modalShow} style={{ textAlign: "left" }}>
                            {item}
                            <p onClick={likeClick}>
                                ❤<span> {like}</span>
                            </p>
                        </h2>
                        <p>2월 17일 발행</p>
                    </div>
                );
            })}
            {isModal && <Modal headline={headline} modalHide={modalHide}></Modal>}

            <button onClick={changeHeadline}>첫번째 제목 바꾸기</button>
            <button onClick={changeHeadlineBack}>첫번째 제목 돌아가기</button>
            <button onClick={changeHeadlineSort}>가나다 순 정렬</button>
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={props.modalHide}>X</button>
        </div>
    );
}

export default App;
