import React from "react";

function MyIntro() {
    const name = "Cassie";

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles= {
        color: "inherit"
    };
    
    if (hours < 12) {
        timeOfDay = "morning";
        styles.color = "#d7ebed";
    } else if (hours >= 12 && hours <= 17) {
        timeOfDay = "afternoon";
        styles.color = "#b3dbe0";
    } else {
        timeOfDay = "evening";
        styles.color = "#141852";
    }

    return (
        <main>
            <h3 style={styles}>Good {timeOfDay}, I'm {name}</h3>
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