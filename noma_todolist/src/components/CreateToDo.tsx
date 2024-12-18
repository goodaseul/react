import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
    toDo: string;
}

const CreateToDo = () => {
    const setToDo = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);

    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDo((oldToDo) => [{ text: toDo, id: Date.now(), category }, ...oldToDo]);
        setValue("toDo", "");
    };
    return (
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
    );
};

export default CreateToDo;
