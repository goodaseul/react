import React from "react";

const TodoList = (props) => {
    return (
        <>
            {props.item.map((item, index) => {
                return (
                    <div key={index} className="todo-item">
                        {item}

                        <button>삭제</button>
                    </div>
                );
            })}
        </>
    );
};

export default TodoList;
