import React from "react";
import Header from "./Header";
import MyIntro from "./MyIntro";
import Todo from "./Todo";
import Footer from "./Footer";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Cassie D"
        }
    }

    render() {
        return (
            <div className="container">
                <Header />
                <MyIntro name={this.state.name}/>
                <Todo />
                <Footer name={this.state.name}/>
            </div>
        );
    }
}

export default App;