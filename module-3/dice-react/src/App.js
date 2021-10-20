import React, { Component } from 'react';
import DiceBox from './DiceBox';

// /* FontAwesome */
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
    constructor() {
        super()
        this.state = {
            numbers: [{
                num1: null,
                num2: null,
                num3: null,
                num4: null,
                num5: null
            }]
        }
    }

    //roll method, roll the dice simulation 
    rollDice = () => {
        this.setState(prevState => {
            return {
                //get 5 random numbers between 1-6 for a six sided die
                numbers: [{
                    num1: prevState.num1 = Math.floor(Math.random() * 6) + 1,
                    num2: prevState.num1 = Math.floor(Math.random() * 6) + 1,
                    num3: prevState.num1 = Math.floor(Math.random() * 6) + 1,
                    num4: prevState.num1 = Math.floor(Math.random() * 6) + 1,
                    num5: prevState.num1 = Math.floor(Math.random() * 6) + 1
                }]
            }
        })
    }

    /* clear the dice so there is no values shown */
    clearDice = () => {
        this.setState(prevState => {
            return {
                numbers: [{
                    num1: null,
                    num2: null,
                    num3: null,
                    num4: null,
                    num5: null
                }]
            }
        })
    }
    render() {
        const showDice = this.state.numbers.map(number => <DiceBox key={Number.index} number={number} />)
        return (
            <div>
                {showDice}
                <button onClick={this.rollDice}>Roll Dice</button>
                <button onClick={this.clearDice}>Clear Values</button>
            </div>
        )
    }
}

export default App;