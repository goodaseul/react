import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import { idText } from "typescript";

const ToDoList = () => {
    // const toDo = useRecoilValue(toDoState); //  <-- const value = useRecoilValue(toDoState); atom 으로 부터 값을 불러옴 const modFn = useSetRecoilState(toDoState);  atom 값을 바꿀 수 있음
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);

    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value);
    };

    console.log(category);
    return (
        <div>
            <h1>To Do</h1>
            <hr />
            <select value={category} onInput={onInput}>
                <option value="TO_DO">To Do</option>
                <option value="DOING">Doing</option>
                <option value="DONE">Done</option>
            </select>
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}

            <h2>To Do</h2>
            {/* <ul>
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
            </ul> */}
        </div>
    );
};

export default ToDoList;
