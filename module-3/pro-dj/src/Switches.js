import React from 'react';
import BoxElement from './BoxElement';
import './index.css';

class Switches extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //this creates initial state with 4 white boxes
            boxes: ['white', 'white', 'white', 'white']
        }
        //instead of changing state value directly we bind state with the new change method. 
        this.smallTimeDJ = this.smallTimeDJ.bind(this)
        this.partyDJ = this.partyDJ.bind(this)
        this.proDJ = this.proDJ.bind(this)
        this.proDJ2 = this.proDJ2.bind(this)
        this.bigTimeDJ = this.bigTimeDJ.bind(this)
        this.playTune = this.playTune.bind(this)
    }

    /* Use methods to change state indirectly with a callback function setState*/
    smallTimeDJ() {
        if (this.state.boxes[0] === 'white') {
            this.setState({
                boxes: ['black', 'black', 'black', 'black']
            })
        } else {
            this.setState({
                boxes: ['white', 'white', 'white', 'white']
            })
        }
    }

    partyDJ() {
        this.setState({
            boxes: ['purple', 'purple', this.state.boxes[2], this.state.boxes[3]]
        })
    }
    proDJ() {
        let items = [...this.state.boxes]
        items[2] = 'blue'
        this.setState({
            boxes: items
        })
    }
    proDJ2() {
        let items = [...this.state.boxes]
        items[3] = 'blue'
        this.setState({
            boxes: items
        })
    }
    bigTimeDJ() {
        this.setState({
            boxes: ['blue', 'red', 'red', 'blue']
        })
    }
    playTune() {
        new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3').play()
    }

    refreshPage() {
        window.location.reload(false)
    }

    render() {
        const boxes = this.state.boxes.map(box => {
            return < BoxElement color={box} />
        })
        return (
            /* On click event will change the state of the original 4 white boxes */
            <div className="container">
                {boxes}
                <button onClick={this.smallTimeDJ}>Small Time DJ</button>
                <button onClick={this.partyDJ}>Party DJ</button>
                <button onClick={this.proDJ}>Pro DJ # 1</button>
                <button onClick={this.proDJ2}>Pro DJ # 2</button>
                <button onClick={this.bigTimeDJ}>Big Time DJ</button>
                <button onClick={this.playTune}>Play Sound</button>
                <button onClick={this.refreshPage}>Stop And Restart</button>
            </div>
        )
    }
}
export default Switches;