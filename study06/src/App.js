import React, { useState, useRef } from "react";

export default function App() {
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);
    // 변수처럼 값을 저장할 필요가 있을 때, 단 UI 에 보일 필요가 없는 / UI가 보여줘야한다? 하면 useState 로 가야함
    // ex 검색할 때 input 안에 검색할 내용이 똑같을 때 - 불필요한 서버 호출을 막아주고 싶을 때
    // UI 애니메이션 구현을 할 때 dom 다루듯이 많이 사용 - top 버튼

    const inputEl = useRef(null);
    console.log("input", inputEl);
    const inputFocus = () => {};
    return (
        <div>
            <div> state : {stateCount}</div>
            <button onClick={() => setStateCount((prev) => (prev += 1))}>state up</button>
            <div> ref : {refCount.current}</div>
            <button
                onClick={() => {
                    refCount.current++;
                    console.log("ref", refCount);
                }}
            >
                ref up
            </button>
            <input type="text" ref={inputEl} />
            <button onClick={() => inputEl.current.focus()}>검색</button>
        </div>
    );
}
