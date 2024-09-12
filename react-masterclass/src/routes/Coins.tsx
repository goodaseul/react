import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CoinList = styled.ul``;
const Coin = styled.li`
    background-color: #eee;
    color: ${(props) => props.theme.accentColor};
    margin: 10px;
    border-radius: 15px;
    a {
        padding: 20px;
        transition: color 0.2s ease-in;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.textColor};
        }
    }
`;
const Title = styled.h1`
    color: ${(props) => props.theme.accentColor};
    font-size: 48px;
    font-weight: bold;
`;
const Loader = styled.div`
    text-align: center;
`;
const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;
const CoinWrapper = styled.div``;
interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}
const Coins = () => {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //즉시 실행 function
        (async () => {
            const response = await fetch(`https://api.coinpaprika.com/v1/coins`);
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
    }, []);
    console.log(coins);
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {loading ? (
                <Loader>Loading....</Loader>
            ) : (
                <CoinList>
                    {coins.map((coin) => (
                        <Coin key={coin.rank}>
                            <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                                <Img src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`} />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinList>
            )}
        </Container>
    );
};

export default Coins;
