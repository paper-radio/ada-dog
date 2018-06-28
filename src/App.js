import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
    state = {
        people: ["alex", "Jordan", "gabe"],
        ideas: ["Make list of tools"],
        bandsILike: ["Radiohead"]
    };
    render() {
        return (
            <div className="App">
                <h1>Hello</h1>

                <p>This is not HTML.</p>

                <p>Make a notes tag</p>

                <p className="note">This is a note!</p>

                <p className="note">Use this a note book</p>

                <div>
                    <h2>Bands</h2>
                    <ul>
                        <li>{this.state.bandsILike[0]}</li>
                    </ul>
                </div>

                <h1>Heros</h1>
                <ul>
                    <li>Aquaman</li>
                    <li>Deadpool</li>
                    <li>Spider Man</li>
                </ul>

                <h1>Feelings</h1>
                <div className="things stuff">
                    <ul>
                        <li>Happy</li>
                        <li>Sad</li>
                        <li>Scared</li>
                    </ul>
                </div>

                <h1>People</h1>
                <Person name="Alex" />
                <Person name="Jordan" />
                <Person name="Gabe"> MEEP!!!</Person>

                <button>Push me...</button>
            </div>
        );
    }
}

export default App;
