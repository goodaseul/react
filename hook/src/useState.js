import { useState } from "react";

const heavyWork = () => {
    console.log("무거운 작업 ! !");
    return ["정다슬", "정다슬2"];
};

const UseState = () => {
    const [names, setNames] = useState(() => {
        return heavyWork();
    }); // 초기값이 계속 렌더링이 되기 때문에 콜백함수 넣어주면 맨처음만 렌더링 됨 ! ! !

    const [input, setInput] = useState("");
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    const handleUpload = () => {
        // 콜백함수 ! ! ! ! 콜백함수 전에는 이전 인자를 가지고있음 names
        setNames((prevState) => {
            console.log(prevState);
            return [input, ...prevState];
        });
    };
    return (
        <div className="UseState">
            <input onChange={handleInputChange} value={input} type="text" />
            <button onClick={handleUpload}>Upload</button>

            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>;
            })}
        </div>
    );
};

export default UseState;
