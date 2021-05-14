import React from "react";
import Header from "./Header";
import MyIntro from "./MyIntro";
import Todo from "./Todo";
import Footer from "./Footer";

function App() {
    return (
        <div className="container">
            <Header />
            <MyIntro />
            <Todo />
            <Footer />
        </div>
    );
}

export default App;