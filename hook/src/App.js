import { useEffect, useState } from "react";
import Timer from "./component/Timer";
const App = () => {
    // state가 없데이트 될때마다 재렌더링
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    // 렌더링 될때마다 매번 실행됨
    useEffect(() => {
        console.log("렌더링");
    }, [count]); // []일 때 한번만 //

    const [showTimer, setShowTimer] = useState(false);
    return (
        <div className="App">
            <button onClick={handleCountUpdate}>Update</button>
            <span>count : {count}</span>
            <input onChange={handleInputChange} value={name} type="text" />
            <span>name: {name}</span>
            {showTimer && <Timer />}
            <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
        </div>
    );
};

export default App;
