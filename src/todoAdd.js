import React, { Component } from "react";

export class ToDoAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.name);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}></input>
                <input type="submit" value="Submit" />
            </form>
        );
    }
} 