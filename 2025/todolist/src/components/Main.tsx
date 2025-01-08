import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { Todo } from "../types";

const Main = () => {
    const [inputValue, setInputValue] = useState<string>(""); // 입력값 상태 관리
    const [todos, setTodos] = useState<Todo[]>([]); // Todo 목록 상태 관리

    // 수정 관리
    const [editingTodoId, setEditingTodoId] = useState<number | null>(null); //editingTodoId는 수정 중인 Todo의 ID를 저장하며, 수정 중이 아닌 경우 null
    const [editingText, setEditingText] = useState<string>(""); // 입력필드 내용 관리 수정 중인 텍스트 저장

    // 정렬 관리
    const [sortOption, setSortOption] = useState<"priority" | "text">("priority");
    const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        priority: todos.length + 1,
        completed: false,
    };

    const handleAddTodo = () => {
        if (inputValue.trim() === "") return;

        setTodos([...todos, newTodo]);
        setInputValue("");
    };

    // 특정 id 삭제
    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id)); // filter 메서드는 배열에서 특정 조건을 만족하는 항목만 남기고 새로운 배열을 만든다. 즉, 삭제하려는 항목을 제외한 나머지 항목들로 상태를 재설정.
    };

    const toggleComplete = (id: number) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
        // 객체를 복사(...todo)하면서 completed 값을 업데이트합니다.
        // todo.id !== id라면 항목을 변경하지 않고 그대로 반환합니다.
        // map의 결과로 생성된 새로운 배열을 setTodos를 통해 상태로 업데이트합니다.
    };

    const startEditing = (id: number, text: string) => {
        // 상태를 업데이트합니다.
        // editingTodoId를 해당 Todo의 ID로 설정하고, editingText를 해당 Todo의 텍스트로 초기화.
        setEditingTodoId(id);
        setEditingText(text);
    };

    const saveTodo = () => {
        // 수정된 내용을 todos 상태에 반영
        setTodos(todos.map((todo) => (todo.id === editingTodoId ? { ...todo, text: editingText } : todo)));
        // editingTodoId와 editingText를 초기화하여 수정 모드를 종료.
        setEditingTodoId(null); // 수정 모드 종료
        setEditingText("");
    };

    // 정렬
    const sortedTodos = [...todos].sort((a, b) => {
        if (sortOption === "priority") {
            return a.priority - b.priority; // 우선순위 기준으로 정렬
        }
        if (sortOption === "text") {
            return a.text.localeCompare(b.text); // 가나다순 정렬
        }

        return 0; // 기본값 (변경 없음)
    });
    return (
        <div className="todo_container">
            <h1>Todo List</h1>
            <div className="wrap_btn">
                <button onClick={() => setSortOption("priority")}>우선순위 정렬</button>
                <button onClick={() => setSortOption("text")}>가나다 정렬</button>
            </div>
            <div className="wrap_components">
                {/* 입력 및 버튼 */}
                <TodoInput inputValue={inputValue} setInputValue={setInputValue} handleAddTodo={handleAddTodo} />
                {/* Todo 목록 */}
                <TodoList todos={sortedTodos} removeTodo={removeTodo} toggleComplete={toggleComplete} startEditing={startEditing} editingTodoId={editingTodoId} editingText={editingText} setEditingText={setEditingText} setEditingTodoId={setEditingTodoId} saveTodo={saveTodo} />
            </div>
        </div>
    );
};

export default Main;
