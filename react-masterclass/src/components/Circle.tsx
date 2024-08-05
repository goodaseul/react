import { useState } from "react";
import styled from "styled-components";

//object 설명해주는 interface

interface CircleProps {
    bgColor: string;
    borderColor?: string; // Optional Props
    text?: string;
}

interface ContainerProps {
    bgColor: string;
    borderColor: string; // required Props
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100%;
    border: 2px solid ${(props) => props.borderColor};
`;

const Circle = ({ bgColor, borderColor, text = "default text" }: CircleProps) => {
    // const [value, setValue] = useState<number | string>(0); // 숫자 or 문자
    // setValue(2);
    // setValue("hello");
    // setValue(true);

    const [counter, setCounter] = useState(1);

    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {/*
            borderColor 가 있다면 < borderColor 사용 
            borderColor 가 undefined 이라면 bgColor 로 기초값을 할게
             */}
            {text}
        </Container>
    );
};

export default Circle;
