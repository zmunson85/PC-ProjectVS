import React, { Component } from 'react';

/* get api key for youtube data API */
const API = 'AIzaSyAEf4CvzZHF51GL0qvdkNJxfuMDgrP1Ok4';
/* Pick the Youtube Channel by entering channelID as string value*/
const channelID = 'UCFbNIlppjAuEX4znoulh0Cw';
const result = 25;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10
/* Destructured URL */
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }
    clicked() {
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
                this.setState({ resultyt });
            })
            .catch((error) => {
                console.error(error);
            });
    }



    render() {
        // console.log(finalURL);
        console.log(this.state.resultyt);

        return (
            <div>
                <button onClick={this.clicked}>Get youtube videos</button>
                {
                    this.state.resultyt.map((link, i) => {
                        console.log(link);
                        // eslint-disable-next-line jsx-a11y/iframe-has-title
                        var frame = <div key={i} className="youtube"><iframe width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
                        return frame;
                    })
                }
                {this.frame}


            </div>
        );
    }
}

export default Youtube;


