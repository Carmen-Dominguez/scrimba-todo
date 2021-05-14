import React from "react";

function MyIntro() {
    const name = "Cassie";
    return (
        <main>
            <h3>Hi, I'm {name}</h3>
            <p>I'm not a fan of my name much, so I'm going with {name} for now. One day I'd like to travel to one
            of these places:
        </p>
            <ul>
                <li>Greece</li>
                <li>Tibet</li>
                <li>Romania</li>
            </ul>

        </main>
    )
}

export default MyIntro