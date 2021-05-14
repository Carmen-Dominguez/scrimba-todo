import React from "react";

function TodoItem(props) {
    return (
        <div className="item">
            <input type="checkbox" id={props.id} name={props.id} />
            <label htmlFor={props.id}>{props.task}</label>
        </div>
    )
    
}

export default TodoItem;
