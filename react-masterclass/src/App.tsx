import { useState } from "react";
import Circle from "./components/Circle";
function App() {
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
        <div>
            {/* <Circle borderColor="red" bgColor="teal" />
            <Circle text="tomato text" bgColor="tomato" /> */}

            <form onSubmit={onSubmit}>
                <input value={username} onChange={onChange} type="text" placeholder="username" />
                <button>Log in</button>
            </form>
        </div>
    );
}

export default App;
