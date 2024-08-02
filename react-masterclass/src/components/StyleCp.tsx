import styled, { keyframes } from "styled-components";

const Father = styled.div`
    display: flex;
`;
const Text = styled.span`
    color: #fff;
`;

// 다른 설정값은 같은데 다른 게 있을 때 props 사용
const Box = styled.div`
    width: 100px;
    height: 100px;
`;
// Box 의 설정값 + 추가 설정값
const Circle = styled(Box)`
    border-radius: 100%;
`;
const Btn = styled.button`
    color: white;
    background-color: tomato;
    border: 0;
    border-radius: 15px;
`;
// html 설정값을 설정해줄 수 있음
const Input = styled.input.attrs({ required: true })`
    background-color: aliceblue;
`;

// animation
const rotationAni = keyframes`
    0%{
        transform: rotate(0deg);
        opacity: 0;
    }
    50%{
        /* transform: rotate(360deg); */
        opacity: 1;
    }
    100%{
        transform: rotate(360deg);
        opacity: 0;
    }
`;
// tag 가 변해야할 때도 적용이 되고싶다면 스타일 컴포넌트 안에 스타일 컨포넌트를 만들어준다.
const Emoji = styled.span`
    font-size: 36px;
    transition: all 0.3s;
    // hover > scss 와 같은 문법
    &:hover {
        font-size: 48px;
    }
`;

const AniBox = styled.div`
    width: 200px;
    height: 200px;
    background-color: darkseagreen;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${rotationAni} 15s linear infinite;
    //이모지가 오직 자식일 때만 가능하게
    ${Emoji}:hover {
        font-size: 99px;
    }
`;
// 다크/라이트 모드
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

const StyleCp = () => {
    return (
        <>
            {/* <Box bgColor="teal">
                <Text>Hello</Text>
            </Box> */}
            {/* <Circle bgColor="tomato" /> */}
            {/* Btn 의 설정값은 쓰고싶은데 모종의 이유로 태그를 바꾸고 싶을 때 */}
            <Btn as="a" href="">
                Log in
            </Btn>
            <Father>
                <Input />
                <Input />
            </Father>
            <AniBox>
                <Emoji as="p">😏</Emoji>
            </AniBox>
            <Emoji>😋</Emoji>

            {/* 다크/라이트 모드 */}
            <Wrapper>
                <Title>Hello</Title>
            </Wrapper>
        </>
    );
};

export default StyleCp;
