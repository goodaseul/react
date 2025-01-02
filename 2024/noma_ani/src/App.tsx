import styled from "styled-components";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 200vh;
    background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
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
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box3 = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Box4 = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const boxVariants2 = {
    hover: { scale: 1.5, rotateZ: 90 },
    click: { borderRadius: "100px", scale: 1 },
    drag: { backgroundColor: "rgb(46,204,113)", transition: { duration: 10 } },
};

function App() {
    const biggerBoxRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
    const gradient = useTransform(x, [-800, 800], ["linear-gradient(135deg,#6c8df1 0%,#272839 100%)", "linear-gradient(135deg,#9195a2 0%,#272839 100%)"]);
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
    useEffect(() => {
        // x.onChange(() => console.log(x.get()));
        // potato.onChange(() => console.log(potato.get()));
        // scrollY.onChange(() => {
        //     console.log(scrollY.get(), scrollYProgress.get());
        // });
    }, [scrollYProgress]);
    return (
        <Wrapper style={{ background: gradient }}>
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
            <BiggerBox ref={biggerBoxRef}>
                <Box3 drag dragConstraints={biggerBoxRef} dragSnapToOrigin dragElastic={0.5} variants={boxVariants2} whileDrag="drag" />
            </BiggerBox>

            {/* <button onClick={() => x.set(200)}> Click me </button> */}
            <Box4 style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
        </Wrapper>
    );
}

export default App;
