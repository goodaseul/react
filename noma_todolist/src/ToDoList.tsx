import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ToDoList = () => {
    const { register, watch } = useForm();
    console.log(watch());
    return (
        <div>
            <form>
                <input {...register("Email")} type="text" placeholder="Email" />
                <input {...register("First Name")} type="text" placeholder="First Name" />
                <input {...register("Last Name")} type="text" placeholder="Last Name" />
                <input {...register("User Name")} type="text" placeholder="User Name" />
                <input {...register("Password")} type="text" placeholder="Password" />
                <button>Add</button>
            </form>
        </div>
    );
};
//  *** register 사용으로 주석처리
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
