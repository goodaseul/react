import React, { useState } from "react";

interface Todo {
    id: number;
    text: string;
}

const TodoInput = () => {
    const [inputValue, setInputValue] = useState<string>(""); // 입력값 관리
    const [todos, setTodos] = useState<Todo[]>([]); // Todo 목록 관리

    // Todo 추가 함수
    const handleAddTodo = () => {
        if (inputValue.trim() === "") return; // 빈 입력값 방지

        const newTodo: Todo = {
            id: Date.now(),
            text: inputValue,
        };

        setTodos([...todos, newTodo]); // 새로운 Todo 추가
        setInputValue(""); // 입력값 초기화
    };

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1>Todo List</h1>
            {/* 입력 및 버튼 */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new task..."
                    style={{
                        padding: "10px",
                        width: "300px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        marginRight: "10px",
                    }}
                />
                <button
                    onClick={handleAddTodo}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Add
                </button>
            </div>

            {/* Todo 목록 */}
            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            margin: "10px auto",
                            padding: "10px",
                            width: "80%",
                            backgroundColor: "#f9f9f9",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            textAlign: "left",
                        }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoInput;
