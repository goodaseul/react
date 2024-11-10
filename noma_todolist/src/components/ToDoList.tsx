import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

interface IForm {
    toDo: string;
}
interface IToDo {
    id: number;
    text: string;
    category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

const ToDoList = () => {
    const [toDo, setToDo] = useRecoilState(toDoState); //  <-- const value = useRecoilValue(toDoState); atom 으로 부터 값을 불러옴 const modFn = useSetRecoilState(toDoState);  atom 값을 바꿀 수 있음

    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDo((oldToDo) => [{ text: toDo, id: Date.now(), category: "TO_DO" }, ...oldToDo]);
        setValue("toDo", "");
    };
    console.log(toDo);
    return (
        <div>
            <h1>To Do</h1>
            <hr />
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register("toDo", {
                        required: "Please write a To Do",
                    })}
                    type="text"
                    placeholder="Write a to do"
                />
                <button>Add</button>
            </form>
            <ul>
                {toDo.map((toDoList) => (
                    <li key={toDoList.id}>
                        {toDoList.category} {toDoList.text}{" "}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
