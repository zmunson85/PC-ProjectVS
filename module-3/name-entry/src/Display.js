import React from 'react';
import './App.css';

class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            input: "",
            inputs: []
        }
        this.updateInput = this.updateInput.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    updateInput(event) {
        event.preventDefault()
        let list = [...this.state.inputs]
        list.push(this.state.input)
        this.setState(prevState => ({ inputs: [...prevState.inputs, prevState.input] }))
        document.getElementById("userInput").value = ""
        this.setState({ input: "" })
    }

    render() {
        const inputs = this.state.inputs.map(input => {
            return <ol>{input}</ol>
        })
        return (
            <div className="container">
                <form>
                    <input
                        type="text"
                        id="userInput"
                        name="input"
                        placeholder="Enter Full Name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <h1 id="currentInput">{this.state.input}</h1>
                    <button className="button" onClick={this.updateInput}>Add To List</button>
                    {inputs}
                </form>
            </div>
        )

    }
}


export default Display;