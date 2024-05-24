/*eslint-disable*/
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    let [headline, setHeadline] = useState(["220523_", "230523_", "240523_"]);
    let [like, setLike] = useState([0, 0, 0]);
    let [isModal, setIsModal] = useState(false);
    let [title, setTitle] = useState(0);
    let [inputValue, setInputValue] = useState("");
    let [pusblishDate, setPublishDate] = useState(["22/05/23", "23/05/23", "24/05/23"]);
    function likeClick(target) {
        let copy = [...like];
        copy[target] += 1;
        setLike(copy);
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
    function modalShow(titleNum) {
        setIsModal((isModal = true));
        setTitle(titleNum);
    }
    function modalHide() {
        setIsModal((isModal = false));
    }
    function inputChange(e) {
        setInputValue(e.target.value);
    }
    function submitValue() {
        if (inputValue == "") {
            alert("hey empty!");
            return;
        }
        let copy = [...headline];
        let copyLike = [...like];
        copy.push(inputValue);
        copyLike.push(0);

        setHeadline(copy);
        setLike(copyLike);
        datePublish();
        inputFocus();
    }
    function removeValue(index) {
        let copy = [...headline];
        copy.splice(index, 1);
        setHeadline(copy);
    }
    function inputFocus() {
        setInputValue("");
    }
    function datePublish() {
        let today = new Date();
        var year = today.getFullYear();
        var month = ("0" + (today.getMonth() + 1)).slice(-2);
        var day = ("0" + today.getDate()).slice(-2);
        var dateString = `${year}/${month}/${day}`;

        let copy = [...pusblishDate];
        copy.push(dateString);
        setPublishDate(copy);
    }
    return (
        <div className="App">
            <header className="black_nav">
                <div className="inner">
                    <h1>B L O G !</h1>
                </div>
            </header>
            <section className="section section_input">
                <div className="inner">
                    <h2 className="noto">게시글을 발행해주세요.</h2>
                    <div className="input_area">
                        <input
                            value={inputValue}
                            onFocus={() => {
                                setInputValue("");
                            }}
                            onChange={function (e) {
                                inputChange(e);
                            }}
                        />
                        <button onClick={submitValue} className="noto">
                            발행
                        </button>
                    </div>
                </div>
            </section>
            <section className="section section_list">
                <div className="inner">
                    {headline.map((item, index) => {
                        return (
                            <div className="list" key={index}>
                                <div
                                    className="headline"
                                    onClick={function (e) {
                                        modalShow(index);
                                    }}
                                >
                                    <h2>{item}</h2>
                                    <p
                                        onClick={function (e) {
                                            e.stopPropagation();
                                            likeClick(index);
                                        }}
                                    >
                                        ❤<span> {like[index]}</span>
                                    </p>
                                </div>
                                <p>{pusblishDate[index]} 발행</p>

                                <button
                                    onClick={function () {
                                        removeValue(index);
                                    }}
                                    className="remove"
                                >
                                    -
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>
            {isModal && <Modal pusblishDate={pusblishDate} title={title} changeHeadline={changeHeadline} changeHeadlineBack={changeHeadlineBack} changeHeadlineSort={changeHeadlineSort} headline={headline} modalHide={modalHide}></Modal>}
            <ChangeBtn changeHeadline={changeHeadline} changeHeadlineBack={changeHeadlineBack} changeHeadlineSort={changeHeadlineSort}></ChangeBtn>
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.headline[props.title]}</h4>
            <p className="date">{props.pusblishDate[props.title]}</p>
            <p className="content">오늘은 말이햐 ! ~ ! </p>
            {/* <ChangeBtn changeHeadline={props.changeHeadline} changeHeadlineBack={props.changeHeadlineBack} changeHeadlineSort={props.changeHeadlineSort}></ChangeBtn> */}
            <button className="closebtn" onClick={props.modalHide}>
                X
            </button>
        </div>
    );
}

function ChangeBtn(props) {
    return (
        <div className="inner">
            <button onClick={props.changeHeadline}>첫번째 제목 바꾸기</button>
            <button onClick={props.changeHeadlineBack}>첫번째 제목 돌아가기</button>
            <button onClick={props.changeHeadlineSort}>가나다 순 정렬</button>
        </div>
    );
}

export default App;
