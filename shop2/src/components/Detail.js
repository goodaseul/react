// eslint
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "./../store";
const Detail = (props) => {
    //redux store 가져와줌
    let state = useSelector((state) => {
        return state;
    });
    let dispatch = useDispatch();

    let [isShow, setIsShow] = useState(true);
    let [notice, setNotice] = useState(false);

    let [num, setNum] = useState("");
    let [tab, setTab] = useState(0);
    useEffect(() => {
        if (isNaN(num)) {
            setNotice(true);
        } else {
            setNotice(false);
        }
    }, [num]);

    useEffect(() => {
        let banner = setTimeout(() => {
            setIsShow(false);
        }, 2000);

        return () => {
            // useEffect 실행 전에 실행됨 cleanup function
            // mount X unmount 페이지 이동할 때는 한번 실행하고 넘어감
            clearTimeout(banner);
        };
    }, []);

    let [count, setCount] = useState(0);

    let { id } = useParams();
    let findItem = props.shoes.find((item) => {
        return (item.id = id);
    });

    useEffect(() => {
        let getItem = localStorage.getItem("watched");
        getItem = JSON.parse(getItem);
        getItem.push(findItem.id);

        getItem = new Set(getItem);
        getItem = Array.from(getItem);

        localStorage.setItem("watched", JSON.stringify(getItem));
    }, []);

    return (
        <div className="detail">
            <div className="wrap">
                {isShow ? <div className="banner">2초 이내 구매시 할인</div> : ""}
                {notice ? <div className="notice">숫자만 입력하라고요</div> : ""}
                <input
                    onChange={(e) => {
                        setNum(e.target.value);
                    }}
                    placeholder="숫자만 입력하셈"
                />
                <button
                    onClick={() => {
                        setCount((count += 1));
                    }}
                >
                    {count}
                </button>
                <div className="wrap_img">
                    <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} />
                </div>
                <div className="wrap_info">
                    <h2>{findItem.title}</h2>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}</p>
                    <button onClick={() => dispatch(addItem({ id: `${findItem.id}`, name: `${findItem.title}`, count: 1 }))} className="btn">
                        주문하기
                    </button>
                </div>
                <div className="wrap_tab">
                    <ul className="tabs">
                        <li onClick={() => setTab(0)}>
                            <a href="#!">btn1</a>
                        </li>
                        <li onClick={() => setTab(1)}>
                            <a href="#!">btn2</a>
                        </li>
                        <li onClick={() => setTab(2)}>
                            <a href="#" onClick={(e) => e.preventDefault}>
                                btn3
                            </a>
                        </li>
                    </ul>
                    <TabCont tab={tab}></TabCont>
                </div>
            </div>
        </div>
    );
};

const TabCont = (props) => {
    // if (props.tab === 0) {
    //     return <div className="contents">내용1</div>;
    // } else if (props.tab === 1) {
    //     return <div className="contents">내용2</div>;
    // } else {
    //     return <div className="contents">내용3</div>;
    // }

    let [effect, setEffect] = useState("");

    useEffect(() => {
        let effectTime = setTimeout(() => {
            setEffect("end");
        }, 100);

        return () => {
            clearTimeout(effectTime);
            setEffect("");
        };
    }, [props.tab]);

    return <div className={`start ${effect}`}>{[<div className="contents">내용1</div>, <div className="contents">내용2</div>, <div className="contents">내용3</div>][props.tab]}</div>;
};

export default Detail;
