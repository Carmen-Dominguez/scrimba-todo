import React from "react";

class Footer extends React.Component {
    name = "Default";

    constructor(props) {
        super();
        this.name = props.name;
    }

    render() {
        return (
            <footer>
                <h5>Created by: {this.name}.</h5>
                <h6>2021</h6>
            </footer>);
    }
}

export default Footer;