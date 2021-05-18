import React from "react";

function TodoItem(props) {
    return (
        <div className="item">
            <input type="checkbox"
                id={props.id}
                name={props.id}
                defaultChecked={props.completed}
                onChange={click(props.completed)}
            />

            <label htmlFor={props.id}>{props.task}</label>
        </div>
    )
}

function click(completed) {
    // do nothing
}

export default TodoItem;
