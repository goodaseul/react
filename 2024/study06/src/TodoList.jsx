import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";

function TodoList() {
    const [inputValue, setInputValue] = useState("");
    const [item, setItem] = useState([]);
    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    const addItem = () => {
        let copyItem = setItem([...item, inputValue]);
    };

    return (
        <div className="TodoList">
            <main>
                <input value={inputValue} type="text" onChange={(e) => onChange(e)} />
                <button onClick={addItem}>추가</button>

                <TodoBoard item={item} setItem={setItem} />
            </main>
        </div>
    );
}

export default TodoList;
