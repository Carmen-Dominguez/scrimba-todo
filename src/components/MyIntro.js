import React from "react";

class MyIntro extends React.Component {
    name = "Default";
    date = new Date();
    hours = this.date.getHours();
    timeOfDay = 0;
    styles= {
        color: "inherit"
    };

    constructor(props) {
        super();
        this.name = props.name;
    }

    
    getStyle() {
        if (this.hours < 12) {
            this.timeOfDay = "morning";
            this.styles.color = "#d7ebed";
        } else if (this.hours >= 12 && this.hours <= 17) {
            this.timeOfDay = "afternoon";
            this.styles.color = "#b3dbe0";
        } else {
            this.timeOfDay = "evening";
            this.styles.color = "#141852";
        }
    }
    
    render() {
        this.getStyle();

        return (
            <main>
                <h3 style={this.styles}>Good {this.timeOfDay}, I'm {this.name}</h3>
                <p>I'm not a fan of my name much, so I'm going with {this.name} for now. One day I'd like to travel to one
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
}

export default MyIntro