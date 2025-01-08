import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { Todo } from "../types";

const Main = () => {
    const [inputValue, setInputValue] = useState<string>(""); // 입력값 상태 관리
    const [todos, setTodos] = useState<Todo[]>([]); // Todo 목록 상태 관리

    const handleAddTodo = () => {
        if (inputValue.trim() === "") return;

        const newTodo: Todo = {
            id: Date.now(),
            text: inputValue,
        };

        setTodos([...todos, newTodo]);
        setInputValue(""); // 입력값 초기화
    };
    return (
        <div className="todo_container">
            <h1>Todo List</h1>
            <div>
                {/* 입력 및 버튼 */}
                <TodoInput inputValue={inputValue} setInputValue={setInputValue} handleAddTodo={handleAddTodo} />
                {/* Todo 목록 */}
                <TodoList todos={todos} />
            </div>
        </div>
    );
};

export default Main;
