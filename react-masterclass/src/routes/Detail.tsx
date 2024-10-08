// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams, useLocation, useMatch } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";

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

const Title = styled.h1`
    color: ${(props) => props.theme.accentColor};
    font-size: 48px;
    font-weight: bold;
`;

const Overview = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
`;
const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span:first-child {
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;
const Description = styled.p`
    margin: 20px 0px;
`;

const Loader = styled.div`
    text-align: center;
`;

const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
`;
const Tab = styled.span<{ $isActive: boolean }>`
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 7px 0px;
    border-radius: 10px;
    a {
        display: block;
        color: ${(props) => (props.$isActive ? props.theme.accentColor : props.theme.textColor)};
    }
`;

interface RouteState {
    state: {
        name: string;
    };
}

interface IInfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;

    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface IPriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}
const Coin = () => {
    const { coinID } = useParams();
    /* 
        react-router-dom v6 이상 > 
        useParams쓰는 순간 타입이 string or undefined로 됨.
    */
    /*
        react-router-dom v6 이상 > 
        제네릭을 지원하지 않는다고 한다
    */
    // const { state } = useLocation<RouteState>();

    /* 
        const location = useLocation();
        const name = location.state as RouteState;
                    vs
    */
    const { state } = useLocation() as RouteState;
    const priceMatch = useMatch("/:coinId/price");
    const chartMatch = useMatch("/:coinId/chart");

    const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>({
        queryKey: ["info", coinID],
        queryFn: () => fetchCoinInfo(`${coinID}`),
    });

    const { isLoading: trickersLoading, data: tickersData } = useQuery<IPriceData>({
        queryKey: ["tickers", coinID],
        queryFn: () => fetchCoinTickers(`${coinID}`),
    });

    // const [loading, setLoading] = useState(true);
    // const [info, setInfo] = useState<IInfoData>();
    // const [priceInfo, setPriceInfo] = useState<IPriceData>();
    // useEffect(() => {
    //     (async () => {
    //         const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinID}`)).json();
    //         const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinID}`)).json();
    //         setInfo(infoData);
    //         setPriceInfo(priceData);
    //         // 데이터 request 해준 후 loading false
    //         setLoading(false);
    //     })();
    // }, [coinID]);

    const loading = infoLoading || trickersLoading;

    return (
        <Container>
            <Header>
                {/* 
                    Coins.tsx state.name 을 불러옴> 링크타고 들어오면 state.name존재
                    바로 state.name 타고 들어오면 state.name이 존재 x
                    --------------------------------------------------------------
                    state.name 이 존재하면? name 을 가져오고  state가 존재하지 않을 때는 로딩 텍스트
                */}
                <Title>{state?.name ? state.name : loading ? "Loading ..." : infoData?.name}</Title>
            </Header>
            {loading ? (
                <Loader>Loading....</Loader>
            ) : (
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank:</span>
                            <span>{infoData?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol:</span>
                            <span>${infoData?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Open Source:</span>
                            <span>{infoData?.open_source ? "Yes" : "No"}</span>
                        </OverviewItem>
                    </Overview>
                    <Description>{infoData?.description}</Description>
                    <Overview>
                        <OverviewItem>
                            <span>Total Suply:</span>
                            <span>{tickersData?.total_supply}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Max Supply:</span>
                            <span>{tickersData?.max_supply}</span>
                        </OverviewItem>
                    </Overview>

                    <Tabs>
                        <Tab $isActive={chartMatch !== null}>
                            <Link to={`/${coinID}/chart`}>Chart</Link>
                        </Tab>
                        <Tab $isActive={priceMatch !== null}>
                            <Link to={`/${coinID}/price`}>Price</Link>
                        </Tab>
                    </Tabs>

                    <Outlet />
                </>
            )}
        </Container>
    );
};

export default Coin;
