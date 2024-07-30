import React, { useState } from "react";

interface IProps {
    word: IWord;
}
export interface IWord {
    id: number;
    day: string;
    eng: string;
    kor: string;
    isDone: boolean;
}

const Word = ({ word: w }: IProps) => {
    // 새로운 변수명으로 할당할 수 있음
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    const toggleShow = () => {
        setIsShow(!isShow);
    };
    const toggleDone = () => {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            //요청의 옵션
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then((res) => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    };
    const del = () => {
        if (window.confirm("삭제 하시겠습니까?")) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            }).then((res) => {
                if (res.ok) {
                    setWord({ ...word, id: 0 });
                }
            });
        }
    };
    if (word.id === 0) {
        return null;
    }
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
                    <button className="btn_del" onClick={del}>
                        삭제
                    </button>
                </td>
            </tr>
        </>
    );
};

export default Word;

// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE
