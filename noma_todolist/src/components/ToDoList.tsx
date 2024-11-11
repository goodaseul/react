import React from "react";
import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";
import { idText } from "typescript";

const ToDoList = () => {
    // const toDo = useRecoilValue(toDoState); //  <-- const value = useRecoilValue(toDoState); atom 으로 부터 값을 불러옴 const modFn = useSetRecoilState(toDoState);  atom 값을 바꿀 수 있음
    const [toDo, doing, done] = useRecoilValue(toDoSelector);

    return (
        <div>
            <h1>To Do</h1>
            <hr />
            <CreateToDo />
            <h2>To Do</h2>
            <ul>
                {toDo.map((toDoList) => (
                    <ToDo key={toDoList.id} {...toDoList} />
                ))}
            </ul>
            <hr />
            <h2>Doing</h2>
            <ul>
                {doing.map((toDoList) => (
                    <ToDo key={toDoList.id} {...toDoList} />
                ))}
            </ul>
            <hr />
            <h2>Done</h2>
            <ul>
                {done.map((toDoList) => (
                    <ToDo key={toDoList.id} {...toDoList} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
