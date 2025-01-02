import React, { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);
    if (num < 0) {
        return setNum(0);
    }
    const increaseNum = () => {
        setNum((prev) => prev + 1);
    };
    const decreaseNum = () => {
        setNum((prev) => prev - 1);
    };
    return (
        <div>
            <button onClick={increaseNum}> + </button>
            <button onClick={decreaseNum}> - </button>

            <p>{num}</p>
        </div>
    );
};

export default Counter;
