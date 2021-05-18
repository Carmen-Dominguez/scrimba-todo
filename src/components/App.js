import React from "react";
import Header from "./Header";
import MyIntro from "./MyIntro";
import Todo from "./Todo";
import Footer from "./Footer";

class App extends React.Component {
    name = "Cassie";

    render() {
        return (
            <div className="container">
                <Header />
                <MyIntro name={this.name}/>
                <Todo />
                <Footer name={this.name}/>
            </div>
        );
    }
}

export default App;