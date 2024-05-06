import { useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDoS, setToDoS] = useState([]);
    const onChange = (event) => {
        setToDo(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDo("");
        setToDoS((currentArray) => [toDo, ...currentArray]);
    };
    return (
        <div>
            <h1>My to Dos ({toDoS.length})</h1>
            <form onSubmit={onSubmit}>
                <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do..." />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDoS.map((item, index) => (
                    <li key={index}> {item.toUpperCase()}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
