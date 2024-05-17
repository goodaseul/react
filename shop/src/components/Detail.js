/* eslint-disable */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
    const [time, setTime] = useState(true);

    useEffect(() => {
        let timeOut = setTimeout(() => setTime(false), 2000);
        console.log(2);

        return () => {
            console.log(1);
            clearTimeout(timeOut);
            // 리턴가능 !  ! ! ! ! ! useeffect 동작전에 실행되는 return 소스  == cleanup
        };
    }, []);
    const [value, setValue] = useState("");
    const [notice, setNotice] = useState(false);

    useEffect(() => {
        if (!isNaN(value) == true) {
            setNotice(false);
        } else {
            setNotice(true);
            return;
        }
    }, [value]);

    // 유저가 :id 자리에 적은거 가져와줌
    let { id } = useParams(); // 유저가 url 파라미터에 입력한 거 가져오기
    const paramCorrect = props.shoes.find((x) => {
        return x.id === Number(id);
    });

    return (
        <div className="container">
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
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;
