import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
    //필수값이 아니라면  email?: string;
    email: string;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
}

const ToDoList = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });

    // console.log(watch());

    const onValid = (data: any) => {
        console.log(data);
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
                <input {...register("firstname", { required: "First length is min 10", minLength: 10 })} type="text" placeholder="First Name" />
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
                <button>Add</button>
            </form>
        </div>
    );
};
//  *** register 사용으로 주석처리
// *** handleSubmit > validator / 전송
// const ToDoList = () => {
//     const [toDo, setToDo] = useState("");
//     const [toDoError, setToDoError] = useState("");

//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: { value },
//         } = event;
//         setToDoError("");
//         setToDo(value);
//     };
//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (toDo.length < 10) {
//             return setToDoError("To do should be longer");
//         }
//         console.log("submit");
//     };
// *** register
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} type="text" placeholder="Write a to do" />
//                 <button>Add</button>
//                 {/* 빈 문자열이 아니라면 */}
//                 {toDoError !== "" ? toDoError : null}
//             </form>
//         </div>
//     );
// };

export default ToDoList;
