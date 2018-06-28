import React from "react";

const person = props => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Age: </h2>

            <h2>Battle cry: {props.children}</h2>
        </div>
    );
};

export default person;
