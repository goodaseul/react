import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
    toDo: string;
}

const CreateToDo = () => {
    const setToDo = useSetRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDo((oldToDo) => [{ text: toDo, id: Date.now(), category: "TO_DO" }, ...oldToDo]);
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
