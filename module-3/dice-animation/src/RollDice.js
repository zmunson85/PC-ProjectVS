import React, { Component } from 'react'
import './RollDice.css'
import Die from './Die'

class RollDice extends Component {

    // Face numbers passes as default props
    static defaultProps = {
        sides: ['one', 'two', 'three',
            'four', 'five', 'six']
    }
    constructor(props) {
        super(props)

        // States/* manage all 5 dice as a state object, every die object has own properties */


        this.state = {
            die1: 'one',
            die2: 'two',
            die3: 'three',
            die4: 'four',
            die5: 'five',
            rolling: false
        }
        this.roll = this.roll.bind(this)
    }
    roll() {
        const { sides } = this.props
        this.setState({

            // Changing state upon click
            die1: sides[Math.floor(Math.random() * sides.length)],
            die2: sides[Math.floor(Math.random() * sides.length)],
            die3: sides[Math.floor(Math.random() * sides.length)],
            die4: sides[Math.floor(Math.random() * sides.length)],
            die5: sides[Math.floor(Math.random() * sides.length)],
            rolling: true
        })

        // Start timer of one sec when rolling start
        setTimeout(() => {

            // Set rolling to false again when time over
            this.setState({ rolling: false })
        }, 700)
    }


    clearDice = () => {
        this.setState(prevState => {
            console.log(prevState)
            return {
                die1: 'one',
                die2: 'two',
                die3: 'three',
                die4: 'four',
                die5: 'five'
            }
        })
    }

    render() {

        const handleBtn = this.state.rolling ?
            'RollDice-rolling' : ''
        const { die1, die2, die3, die4, die5, rolling } = this.state
        return (
            <div className='RollDice'>
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>5 Dice Game</h1>
                <div className='RollDice-container'>
                    <button><Die face={die1} rolling={rolling} /></button>
                    <button><Die face={die2} rolling={rolling} /></button>
                    <button><Die face={die3} rolling={rolling} /></button>
                    <button><Die face={die4} rolling={rolling} /></button>
                    <button><Die face={die5} rolling={rolling} /></button>
                </div>
                <button id='RollDice' className={handleBtn}
                    disabled={this.state.rolling}
                    onClick={this.roll}>
                    {this.state.rolling ? 'Rolling' : 'Roll Dice!'}
                </button>
                <button id='Reset' onClick={this.clearDice}>Reset Values</button>
            </div>
        )
    }
}

export default RollDice