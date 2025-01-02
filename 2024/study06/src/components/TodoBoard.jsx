import React from "react";
import TodoList from "./TodoList";

const TodoBoard = (props) => {
    return (
        <div>
            <h1>Todo List</h1>
            <TodoList item={props.item} setItem={props.setItem} />
        </div>
    );
};

export default TodoBoard;
