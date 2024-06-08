import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detail = (props) => {
    let [isShow, setIsShow] = useState(true);
    let [notice, setNotice] = useState(false);

    let [num, setNum] = useState("");
    useEffect(() => {
        if (isNaN(num)) {
            setNotice(true);
        } else {
            setNotice(false);
        }
        console.log("11");
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
                    <button className="btn">주문하기</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;
