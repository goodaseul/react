import { useState } from "react";
import { useParams, useLocation } from "react-router";
import styled from "styled-components";
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
const Loader = styled.div`
    text-align: center;
`;

interface RouteState {
    state: {
        name: string;
    };
}

const Coin = () => {
    const [loading, setLoading] = useState(true);
    /* 
        react-router-dom v6 이상 > 
        useParams쓰는 순간 타입이 string or undefined로 됨.
    */
    const { coinID } = useParams();
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

    return (
        <Container>
            <Header>
                {/* 
                    Coins.tsx state.name 을 불러옴> 링크타고 들어오면 state.name존재
                    바로 state.name 타고 들어오면 state.name이 존재 x
                    --------------------------------------------------------------
                    state.name 이 존재하면? name 을 가져오고  state가 존재하지 않을 때는 로딩 텍스트
                */}
                <Title>{state?.name || "Loading"}</Title>
            </Header>
            {loading ? <Loader>Loading....</Loader> : null}
        </Container>
    );
};

export default Coin;
