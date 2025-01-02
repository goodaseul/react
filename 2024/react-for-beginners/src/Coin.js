import { useEffect, useState } from "react";
function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    const [get, setGet] = useState([]);
    const [input, setInput] = useState(20);
    const [calc, setCalc] = useState();

    const inputChange = (e) => {
        setInput(Math.floor(e.target.value));
    };
    const onChange = (e) => {
        const selectItem = coins[e.target.value].quotes.USD.price;
        setGet(selectItem);
        setCalc(input / get);
    };

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers").then((response) => {
            response.json().then((json) => {
                setCoins(json);
                setLoading(false);
            });
        });
    }, []);
    return (
        <div>
            <h1> The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading ...</strong>
            ) : (
                <div>
                    <input value={input} onChange={inputChange} />
                    <select onChange={onChange}>
                        {coins.map((item, index) => (
                            <option value={index}>
                                {item.name} ({item.symbol})<br />
                                price: {item.quotes.USD.price} USD
                            </option>
                        ))}
                    </select>
                    <h2>선택한 코인을 당신은 {calc == null ? "" : ` {${calc} } `}개 구매가능^^</h2>
                </div>
            )}
        </div>
    );
}

export default App;
