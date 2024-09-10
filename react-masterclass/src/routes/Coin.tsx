import { useParams } from "react-router";

const Coin = () => {
    /* 
        react-router-dom v6 이상 > 
        useParams쓰는 순간 타입이 string or undefined로 됨.
    */
    const { coinID } = useParams();
    return <h1>coin : {coinID}</h1>;
};

export default Coin;
