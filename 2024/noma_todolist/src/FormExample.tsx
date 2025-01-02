import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
    //필수값이 아니라면  email?: string;
    email: string;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    password2: string;
    extraError?: string;
}

const ToDoList = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });

    // console.log(watch());

    const onValid = (data: IForm) => {
        console.log(data);
        if (data.password !== data.password2) {
            return setError("password2", { message: "Password are not the same" }, { shouldFocus: true });
        }
        // setError("extraError", { message: "Server offline." });
    };
    console.log(errors);
    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
                <input
                    {...register("email", {
                        required: "Email is Required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
                            message: "Only naver.com email allowed",
                        },
                        minLength: {
                            value: 8,
                            message: "Please Write accurate email length.", // 유저에게 보여줄 화면에 나올 에러 객체
                        },
                    })}
                    type="text"
                    placeholder="Email"
                />
                <span> {errors?.email?.message}</span>
                <input
                    {...register("firstname", {
                        required: "First length is min 10",
                        validate: {
                            noNico: (value) => (value.includes("nico") ? "You can't use 'nico' " : true),
                            noDaseul: (value) => (value.includes("daseul") ? "You can't use 'daseul' " : true),
                        },
                        minLength: 10,
                    })}
                    type="text"
                    placeholder="First Name"
                />
                <span> {errors?.firstname?.message}</span>
                <input {...register("lastname", { required: "Last length is required" })} type="text" placeholder="Last Name" />
                <span> {errors?.lastname?.message}</span>
                <input {...register("username", { required: "username is required" })} type="text" placeholder="User Name" />
                <span> {errors?.username?.message}</span>
                <input
                    {...register("password", {
                        required: "Password is required", // 유저에게 보여줄 화면에 나올 에러 객체
                        minLength: {
                            value: 5,
                            message: "Your password is too short.", // 유저에게 보여줄 화면에 나올 에러 객체
                        },
                    })}
                    type="text"
                    placeholder="Password"
                />
                <span> {errors?.password?.message}</span>
                <input
                    {...register("password2", {
                        required: "Password2 is required", // 유저에게 보여줄 화면에 나올 에러 객체
                        minLength: {
                            value: 5,
                            message: "Your password2 is too short.", // 유저에게 보여줄 화면에 나올 에러 객체
                        },
                    })}
                    type="text"
                    placeholder="password2"
                />
                <span> {errors?.password2?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    );
};
export default ToDoList;
