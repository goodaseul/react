import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [item, setItem] = useState([]);
    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    const addItem = () => {
        let copyItem = setItem([...item, inputValue]);
        console.log(copyItem);
    };

    return (
        <div className="App">
            <main>
                <input value={inputValue} type="text" onChange={(e) => onChange(e)} />
                <button onClick={addItem}>추가</button>

                <TodoBoard item={item} />
            </main>
        </div>
    );
}

export default App;
