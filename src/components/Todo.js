import React from "react";

function Todo() {
    return (
        <div>
            <h3>My Todo List: </h3>
            <form>
                <input type="checkbox" id="1" name="1" />
                <label htmlFor="1">Todo 1: </label>
                <br />
                <input type="checkbox" id="2" name="2" />
                <label htmlFor="2">Todo 2: </label>
                <br />
                <input type="checkbox" id="3" name="3" />
                <label htmlFor="3">Todo 3: </label>
            </form>
        </div>
    );
}

export default Todo