import React, { useState } from "react";

const Word = ({ word }) => {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    const toggleShow = () => {
        setIsShow(!isShow);
    };
    const toggleDone = () => {
        setIsDone(!isDone);
    };
    return (
        <>
            <tr className={isDone ? "off" : ""}>
                <td>
                    <input type="checkbox" onChange={toggleDone} checked={isDone} />
                </td>
                <td>{word.eng}</td>
                <td>{isShow && word.kor}</td>
                <td>
                    <button onClick={toggleShow}> {isShow ? "숨기기" : "뜻보기"}</button>
                    <button className="btn_del">삭제</button>
                </td>
            </tr>
        </>
    );
};

export default Word;
