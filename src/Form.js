import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            qty: ''
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createitem(this.state);
        this.setState({ name: '', qty: '' });
    }
    render() {
        return (


            <form onSubmit={this.submitHandler}>

                j
                <label htmlFor='name'>Name:</label>

                <input type="text"
                    name='name'
                    id='name'
                    onChange={this.changeHandler}
                    value={this.state.name}>
                </input>

                <label htmlFor='name'>Qty:</label>

                <input type='text'
                    name='qty'
                    id='qty'
                    onChange={this.changeHandler}
                    value={this.state.qty}></input>

                <button>Add</button>
            </form>

        );
    }
}

export default Form;