import React from "react";
import { IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";
const ToDo = ({ text, category, id }: IToDo) => {
    // const onClick = (newCategory: IToDo["category"]) => {
    //     console.log(newCategory);
    // };

    const setToDo = useSetRecoilState(toDoState);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;

        setToDo((oldToDo) => {
            const targetIndex = oldToDo.findIndex((toDo) => toDo.id === id);
            const oldToDoList = oldToDo[targetIndex];
            const newToDoList = { text, id, category: name as any }; // 주석처리 한 익명함수가 더 나을듯
            return [...oldToDo.slice(0, targetIndex), newToDoList, ...oldToDo.slice(targetIndex + 1)];
        });
    };
    return (
        <li>
            <span>{text}</span>
            {/* {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>To Do</button>}
            {category !== "DOING" && <button onClick={() => onClick("DOING")}>Doing</button>}
            {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>} */}

            {category !== "TO_DO" && (
                <button name="TO_DO" onClick={onClick}>
                    To Do
                </button>
            )}
            {category !== "DOING" && (
                <button name="DOING" onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== "DONE" && (
                <button name="DONE" onClick={onClick}>
                    Done
                </button>
            )}
        </li>
    );
};

export default ToDo;
