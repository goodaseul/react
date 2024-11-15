import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
`;

function App() {
    return (
        <Wrapper>
            <Box></Box>
        </Wrapper>
    );
}

export default App;
