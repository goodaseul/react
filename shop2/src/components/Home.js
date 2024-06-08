import { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";
import data from "../data";

const Home = (props) => {
    let [dataNum, setDataNum] = useState(1);
    let [isData, setIsData] = useState(true);

    const moreShoes = () => {
        setDataNum((dataNum += 1));
        console.log("로딩중입니다.");
        axios
            .get(`https://codingapple1.github.io/shop/data${dataNum}.json`)
            .then((data) => {
                let joinArray = [...props.shoes, ...data.data];
                props.setShoes(joinArray);
                console.log("로딩끝.");
            })
            .catch(() => {
                alert("이제 불러올 데이터가 없다.");
                setIsData(false);
            });
    };

    return (
        <>
            {/* src 는 빌드업 후 변형이 되기 때문에 import 해서 변수로 사용해줘야함 */}
            <div className="main_bg" style={{ backgroundImage: `url(${props.bg})` }}></div>
            <div className="proudct_list">
                <List shoes={props.shoes} />
            </div>
            {isData ? (
                <button onClick={moreShoes} className="more_btn">
                    더보기
                </button>
            ) : null}
        </>
    );
};

export default Home;
