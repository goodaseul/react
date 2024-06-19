import { styled } from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Text = styled.div`
    font-size: 24px;
`;

const LoadingScreen = () => {
    return (
        <Wrapper>
            <Text>isLoading</Text>
        </Wrapper>
    );
};

export default LoadingScreen;
