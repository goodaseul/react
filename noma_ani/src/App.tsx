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
const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

// const myVars = {
//     start: { scale: 0 },
//     end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 1, bounce: 0.5 } },
// };

const Circle = styled(motion.div)`
    place-self: center;
    border-radius: 40px;
    width: 70px;
    height: 70px;
    background-color: white;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    start: { opacity: 0, scale: 0.5 },
    end: { opacity: 1, scale: 1, transition: { type: "spring", duration: 1, bounce: 0.5, staggerChildren: 0.3 } },
};

const circleVariants = {
    start: {
        opacity: 0,
        y: 10,
    },
    end: {
        opacity: 1,
        y: 0,

        transition: {
            // delay: 0.5
        },
    },
};

const Box2 = styled(motion.div)`
    margin-left: 20px;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box3 = styled(motion.div)`
    margin-left: 20px;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants2 = {
    hover: { scale: 1.5, rotateZ: 90 },
    click: { borderRadius: "100px", scale: 1 },
    drag: { backgroundColor: "rgb(46,204,113)", transition: { duration: 10 } },
};

function App() {
    return (
        <Wrapper>
            {/* <Box transition={{ type: "spring", delay: 1, bounce: 0.5 }} initial={{ scale: 0 }} animate={{ scale: 1, rotateZ: 360 }}> 기본 애니메이션
             */}
            {/* <Box variants={myVars} initial="start" animate="end"> variants 를 사용한 애니메이션 */}
            <Box variants={boxVariants} initial="start" animate="end">
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
            </Box>

            <Box2 variants={boxVariants2} whileHover="hover" whileTap="click" />

            <Box3 drag dragConstraints={{ top: 50 }} variants={boxVariants2} whileDrag="drag" />
        </Wrapper>
    );
}

export default App;
