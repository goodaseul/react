import { useState } from "react";
import styled from "styled-components";
import Circle from "./components/Circle";

const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

function FormTest() {
    const [username, setUsername] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        const {
            currentTarget: { value },
        } = event;

        setUsername(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("hello ", username);
    };
    return (
        <Container>
            {/* <Circle borderColor="red" bgColor="teal" />
            <Circle text="tomato text" bgColor="tomato" /> */}
            <H1>Protected</H1>
            <form onSubmit={onSubmit}>
                <input value={username} onChange={onChange} type="text" placeholder="username" />
                <button>Log in</button>
            </form>
        </Container>
    );
}

export default FormTest;
