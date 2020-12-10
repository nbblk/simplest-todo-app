import React, { Component } from 'react';
import './Container.css';

class Container extends Component {
    state = {
        todo: "",
        todos: []
    };

    inputChangeHandler(event) {
        this.setState({ todo: event.target.value });
    }

    addHandler() {
        this.setState({ todo: '', todos: [...this.state.todos, this.state.todo] });
    };

    deleteHandler(index) {
        let todos = [...this.state.todos];
        todos.splice(index);
        this.setState({ ...this.state.todo, todos: [...todos] });
    }

    render() {
        let todos = this.state.todos
            ? [...this.state.todos].map((todo, index) => { return <li key={index} onClick={() => this.deleteHandler(index)}>{todo}</li> })
            : null;
        return <section>
            <input placeholder="Enter anything you have to do" onChange={(event) => this.inputChangeHandler(event)} />
            <button onClick={() => this.addHandler()}>Add</button>
            <ul>{todos}</ul>
        </section>
    }
}

export default Container;