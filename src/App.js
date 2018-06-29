import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
    state = {
        me: {
            name: "Alexander Adrian Guerra",
            age: 31,
            pets: ["Ada"]
        },
        people: ["alex", "Jordan", "gabe"],
        ideas: ["Make list of tools"],
        bandsILike: ["Radiohead", "The Beatles", "Devo"]
    };

    loggingButtonHandler = () => {
        console.log("Boooo!!!");
        this.setState({});
    };

    render() {
        return (
            <div className="App">
                <h1>Me</h1>

                <h2>Name: {this.state.me.name}</h2>
                <h2>Age: {this.state.me.age}</h2>

                <button onClick={this.loggingButtonHandler}>
                    Change my name to Alex
                </button>
            </div>
        );
    }
}

export default App;
