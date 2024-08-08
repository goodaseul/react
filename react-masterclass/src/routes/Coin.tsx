import { useParams } from "react-router-dom";

const Coin = () => {
    const { coinID } = useParams();
    return <h1>Coin : {coinID}</h1>;
};

export default Coin;
