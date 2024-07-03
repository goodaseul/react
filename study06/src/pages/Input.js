import React, { useState } from "react";

const Input = () => {
    const [inputValue, setInputValue] = useState("");
    const onChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <br />
            <br />
            <p>{inputValue}</p>
        </div>
    );
};

export default Input;
