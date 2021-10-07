import React, { Component } from 'react';

/* get api key for youtube data API *API EXPOSED/BUT RESTRICTED TO YOUTUBE ONLY* */
const API = 'AIzaSyAEf4CvzZHF51GL0qvdkNJxfuMDgrP1Ok4';
/* Pick the Youtube Channel by entering channelID as string value*/
const channelID = 'UC4mLlRa_dezwvytudo9s1sw';
const result = 25;

/* Destructured URL using this Large URL */
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAEf4CvzZHF51GL0qvdkNJxfuMDgrP1Ok4&channelId=UCFbNIlppjAuEX4znoulh0Cw&part=snippet,id&order=date&maxResults=10

/*  */


var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videoLink: []
        };
        this.clicked = this.clicked.bind(this);
    }
    clicked() {
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                const videoLink = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
                this.setState({ videoLink });
            })
            .catch((error) => {
                console.error(error);
            });
    }



    render() {
        // console.log(finalURL);
        console.log(this.state.videoLink);

        return (
            <div>
                <button onClick={this.clicked}>Get youtube videos</button>

                {
                    this.state.videoLink.map((link, i) => {
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


