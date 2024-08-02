import styled from "styled-components";

//object 설명해주는 interface

interface CircleProps {
    bgColor: string;
}

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100%;
`;

const Circle = ({ bgColor }: CircleProps) => {
    return <Container bgColor={bgColor}></Container>;
};

export default Circle;
