import React, { Component } from 'react';

class App extends Component {
    state = {
        count: 0
    }
    incrementCount = () => {
        //to change value use method setState
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return <div>
            <button onClick={this.incrementCount}>I was Clicked {this.state.count} Times!</button>
        </div>
    }
}

export default App;