import React, { useState, useMemo } from "react";
import Todopage from "./Todopage";

const expensiveCalculate = (numbers) => {
    console.log("계산중");
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

export default function MemoExample() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [addNumber, setAddNumber] = useState("");
    const sum = useMemo(() => expensiveCalculate(numbers), [numbers]); // 이 값만 메모리에 저장 // numbers 바뀔 때만 다시 업데이트해줘

    const handleAddNumber = () => {
        setNumbers([...numbers, parseInt(addNumber)]);
        setAddNumber("");
    };

    return (
        <div>
            <div>
                <input type="text" value={addNumber} onChange={(e) => setAddNumber(e.target.value)} />
                <button onClick={handleAddNumber}>계산</button>
                <h2>Number : {numbers.join(", ")}</h2>
                <h2>Sum : {sum}</h2>
            </div>
            <Todopage />
        </div>
    );
}
