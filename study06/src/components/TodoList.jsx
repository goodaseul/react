import React from "react";

const TodoList = (props) => {
    const deleteItem = (index) => {
        console.log(index);
        let copy = [...props.item];
        copy.splice(index, 1);
        props.setItem(copy);
    };
    return (
        <>
            {props.item.map((item, index) => {
                return (
                    <div key={index} className="todo-item">
                        {item}

                        <button onClick={() => deleteItem(index)}>삭제</button>
                    </div>
                );
            })}
        </>
    );
};

export default TodoList;
