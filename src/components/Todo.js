import React from "react";
import TodoItem from "./TodoItem";
import todos from "../data/todosData";

const myTodos = todos;

function Todo() {
    const todos = myTodos.map(item => <TodoItem
        key={item.id}
        id={item.id}
        task={item.task}
        completed={item.completed} 
    />);

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
