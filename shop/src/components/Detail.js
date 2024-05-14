import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props) {
    // 유저가 :id 자리에 적은거 가져와줌
    let { id } = useParams(); // 유저가 url 파라미터에 입력한 거 가져오기
    const paramCorrect = props.shoes.find((x) => {
        return x.id === Number(id);
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
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
