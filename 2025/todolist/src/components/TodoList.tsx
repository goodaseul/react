import { Todo } from "../types";

interface TodoListProps {
    todos: Todo[];
}

const TodoList = (props: TodoListProps) => {
    return (
        <ul className="listbox">
            {/* 부모 요소인 <ul> 추가 */}
            {props.todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button>🏃‍♀️</button>
                    <button>🗑</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
