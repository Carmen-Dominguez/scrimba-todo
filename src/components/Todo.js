import React from "react";
import TodoItem from "./TodoItem";

const myTodos = [
    { id: "1", task: "Todo 1"},
    { id: "2", task: "Todo 2"},
    { id: "3", task: "Todo 3"},
    { id: "4", task: "Todo 4"},
];

function Todo() {
    const todos = myTodos.map(item => <TodoItem id={item.id} task={item.task} />);

    return (
        <div>
            <h3>My Todo List: </h3>
            <form>
                {todos}
            </form>
        </div>
    );
}

export default Todo;
