/* eslint-disable */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../store";

function Detail(props) {
    const [time, setTime] = useState(true);
    let dispatch = useDispatch(); // store.js 로 요청보내주는 함수
    useEffect(() => {
        let timeOut = setTimeout(() => setTime(false), 2000);
        console.log(2);

        return () => {
            console.log(1);
            clearTimeout(timeOut);
            // 리턴가능 ! ! ! ! ! ! useeffect 동작전에 실행되는 return 소스  == cleanup
        };
    }, []);
    const [value, setValue] = useState("");
    const [notice, setNotice] = useState(false);

    const [tabNum, setTabNum] = useState(0);

    useEffect(() => {
        if (!isNaN(value) == true) {
            return setNotice(false);
        } else {
            return setNotice(true);
        }
    }, [value]);

    // 유저가 :id 자리에 적은거 가져와줌
    let { id } = useParams(); // 유저가 url 파라미터에 입력한 거 가져오기
    const paramCorrect = props.shoes.find((x) => {
        return x.id === Number(id);
    });

    let [fade2, setFade2] = useState("");

    useEffect(() => {
        let to2 = setTimeout(() => {
            setFade2("end");
        }, 500);
        return () => {
            clearTimeout(to2);
            setFade2("");
        };
    }, []);

    return (
        <div className={`container start ${fade2}`}>
            {time ? <div className="alert alert-warning">2초이내 구매시 할인</div> : ""}

            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    {notice == true ? <p>NOTICE: 숫자만 입력해주세요</p> : null}
                    <input onChange={(e) => setValue(e.target.value)} />

                    <h4 className="pt-5">{paramCorrect.title}</h4>
                    <p>{paramCorrect.content}</p>
                    <p>{paramCorrect.price}</p>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            dispatch(
                                addItem({
                                    id: paramCorrect.id,
                                    name: paramCorrect.title,
                                    count: 2,
                                })
                            );
                        }}
                    >
                        주문하기
                    </button>
                </div>
            </div>
            <div className="tabmenu">
                <button
                    onClick={() => {
                        setTabNum(0);
                    }}
                >
                    탭1
                </button>
                <button
                    onClick={() => {
                        setTabNum(1);
                    }}
                >
                    탭2
                </button>
                <button
                    onClick={() => {
                        setTabNum(2);
                    }}
                >
                    탭3
                </button>
            </div>
            <div className="tabContent">
                {/* {tabNum == 0 ? <div>탭컨텐츠 1</div> : null}
                {tabNum == 1 ? <div>탭컨텐츠 2</div> : null}
                {tabNum == 2 ? <div>탭컨텐츠 3</div> : null} */}

                <TabContent tabNum={tabNum} shoes={props.shoes} />
            </div>
        </div>
    );
}

function TabContent({ tabNum, shoes }) {
    // 컴포넌트에는 리턴문 필수
    // if (tabNum == 0) {
    //     return <div>탭컨텐츠 1</div>;
    // } else if (tabNum == 1) {
    //     return <div>탭컨텐츠 2</div>;
    // } else {
    //     return <div>탭컨텐츠 3</div>;
    // }

    let [fade1, setFade1] = useState("");

    useEffect(() => {
        // react 18 이상 automatic batching 기능 기능이 근처에 있다면? 최종적으로 한번만 변경해줌 > 재렌더링 X 마지막것만 재렌더링 해줌
        let fadeEnd = setTimeout(() => {
            setFade1("end");
        }, 100);
        return () => {
            clearTimeout(fadeEnd);
            setFade1("");
        };
    }, [tabNum]);

    //  아래 해당 배열에서 [tabNum] state 변경 될 때마다 꺼내달라는 말임...amazing!!!
    return <div className={`start ${fade1}`}>{[<div>{shoes[tabNum].title}</div>, <div>{shoes[tabNum].title}</div>, <div>{shoes[tabNum].title}</div>][tabNum]}</div>;
}

export default Detail;
