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
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    );
};

export default Circle;
