import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState } from "../atoms";
import ToDo from "./ToDo";
import { idText } from "typescript";

const ToDoList = () => {
    const toDo = useRecoilValue(toDoState); //  <-- const value = useRecoilValue(toDoState); atom 으로 부터 값을 불러옴 const modFn = useSetRecoilState(toDoState);  atom 값을 바꿀 수 있음
    return (
        <div>
            <h1>To Do</h1>
            <hr />
            <CreateToDo />
            <ul>
                {toDo.map((toDoList) => (
                    <ToDo key={toDoList.id} {...toDoList} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
