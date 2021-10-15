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
            boxes: ['purple', 'green', this.state.boxes[2], this.state.boxes[3]]
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
            //this goes big and makes more box elements to modify for the amount of colors added, this is a bug but still kind of a cool add on for big time dj...
            boxes: ['orange', 'red', 'yellow', 'blue', 'green', 'purple', 'tan', 'brown', 'black', 'white']
        })
    }
    playTune() {
        new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3').play()
    }

    refreshPage() {
        window.location.reload(false)
    }

    render() {
        //this will bring state value to the color of each box
        const boxes = this.state.boxes.map(box => {
            return < BoxElement color={box} />
        })
        return (
            /* On click event will change the state of the original 4 white boxes */
            <div className="container">
                {boxes}
                <button className='btn' onClick={this.smallTimeDJ}>Small Time DJ</button>
                <button className='btn' onClick={this.partyDJ}>Party DJ</button>
                <button className='btn' onClick={this.proDJ}>Pro DJ # 1</button>
                <button className='btn' onClick={this.proDJ2}>Pro DJ # 2</button>
                <button className='btn' onClick={this.bigTimeDJ}>Big Time DJ</button>
                <div className='container2'>
                    <button className='btn' onClick={this.playTune}>Play Sound</button>
                    <button className='btn' onClick={this.refreshPage}>Stop And Restart</button>
                </div>
            </div>
        )
    }
}
export default Switches;