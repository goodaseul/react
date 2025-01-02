/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
    const [heading, setHeading] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬 독학"]);
    const [like, setLike] = useState([0, 0, 0]);
    const [modalShow, setModalShow] = useState(false);
    const [clickHeading, setClickHeading] = useState("");

    const [inputValue, setInputValue] = useState("");

    let currentDate = new Date();
    let newDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    const [publishDay, setPublishDay] = useState(["2024-5-10 12:0:43", "2024-4-30 21:35:2", "2024-4-11 00:00:00"]);

    const onClickChange = () => {
        let copy = [...heading];
        copy[0] = "여자 코트 추천";
        setHeading(copy);
    };
    const onClickSort = () => {
        let copy = [...heading];
        copy.sort((a, b) => {
            if (a < b) return -1;
            else if (a == b) return 0;
            else return 1;
        });
        setHeading(copy);
    };
    const onClickModal = (e) => {
        setModalShow(true);
        setClickHeading(e.target);
    };
    const onChangeValue = (e) => {
        setInputValue(e.target.value);
    };
    const onClickPublish = () => {
        let copyHeading = [...heading];
        let copyLike = [...like];
        copyHeading.unshift(inputValue);
        copyLike.unshift(0);

        let copyDay = [...publishDay];
        copyDay.unshift(newDate);

        if (inputValue == "") {
            alert("아무것도 입력하지 않았습니다.");
        } else {
            setHeading(copyHeading);
            setLike(copyLike);
            setPublishDay(copyDay);
        }
    };
    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{ fontSize: "65px", color: "#fff" }}>React Blog</h4>
            </div>
            {heading.map((item, index) => {
                return (
                    <div className="list" key={index}>
                        <h4 onClick={onClickModal}>
                            {item}
                            <p>
                                <span
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const copyLike = [...like];
                                        copyLike[index] += 1;
                                        setLike(copyLike);
                                    }}
                                >
                                    👍
                                </span>

                                {like[index]}
                            </p>
                        </h4>

                        <p>{publishDay[index]}</p>

                        <button
                            onClick={() => {
                                let copyHeadingRemove = [...heading];
                                copyHeadingRemove.splice(index, 1);
                                let copyLikeRemove = [...like];
                                copyLikeRemove.splice(index, 1);
                                let copyDayRemove = [...publishDay];
                                copyDayRemove.splice(index, 1);

                                setHeading(copyHeadingRemove);
                                setLike(copyLikeRemove);
                                setPublishDay(copyDayRemove);
                            }}
                        >
                            remove
                        </button>
                    </div>
                );
            })}
            <br />
            <button onClick={onClickChange}>제목 바꾸기</button>
            <br />
            <br />
            <button onClick={onClickSort}>가나다순 정렬</button>
            <br />
            <br />
            <input type="text" onChange={onChangeValue} /> <button onClick={onClickPublish}>글 발행</button>
            {modalShow ? <Modal bg={"skyblue"} clickHeading={clickHeading} setHeading={setHeading} changeHeading="여자 코트 추천" heading={heading} /> : ""}
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal" style={{ background: props.bg }}>
            <h4>{props.clickHeading.innerText}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button
                onClick={() => {
                    let copy = [...props.heading];
                    copy[0] = props.changeHeading;
                    props.setHeading(copy);
                }}
            >
                글 수정
            </button>
        </div>
    );
}

export default App;
