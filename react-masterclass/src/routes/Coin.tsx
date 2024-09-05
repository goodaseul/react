import { useParams } from "react-router-dom";

const Coin = () => {
    /* 
        react-router-dom v6 이상 > 
        useParams쓰는 순간 타입이 string or undefined로 됨.
    */
    const { coinId } = useParams();
    return <h1>Coin : {coinId}</h1>;
};

export default Coin;
