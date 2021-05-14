import React from "react";
import TodoItem from "./TodoItem";

function Todo() {
    return (
        <div>
            <h3>My Todo List: </h3>
            <form>
                <TodoItem id={"1"} task={"Todo 1 "} />
                <TodoItem id={"2"} task={"Todo 2 "} />
                <TodoItem id={"3"} task={"Todo 3 "} />
            </form>
        </div>
    );
}

export default Todo;
