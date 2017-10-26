import React from 'react';
import Websocket from 'react-websocket'

export default class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.simulateSocketMessage = this.simulateSocketMessage.bind(this);
        this.determineEmotionIcon = this.determineEmotionIcon.bind(this);
        this.convertDateToString = this.convertDateToString.bind(this);
        this.state = {
            feed: [
                {
                    time: "11:55",
                    emotion: "anger",
                    img: "tbd",
                },
                {
                    time: "11:55",
                    emotion: "fear",
                    img: "tbd",
                },
                {
                    time: "11:55",
                    emotion: "contempt",
                    img: "tbd",
                },
                {
                    time: "11:55",
                    emotion: "disgust",
                    img: "tbd",
                },
                {
                    time: "11:55",
                    emotion: "surprise",
                    img: "tbd",
                },
            ]
        }
    }

    componentDidMount() {
        const ws = new WebSocket("ws://opencv.fbx.im:8080/get_statistics");
        ws.onopen = function() {
           ws.send("get_statistics");
        };
        ws.onmessage = function (evt) {
            console.log(evt.data);
            this.setState( {
                feed: [...this.state.feed, evt.data]
            }, () => {
                console.log(this.state);
            })
        };
    }

    simulateSocketMessage() {
        let newData = [
            {time: "12:14", emotion: "Fierce"}
        ];

        this.setState( {
            feed: [...this.state.feed, newData[0]]
        }, () => {
            console.log(this.state);
        })
    }

    determineEmotionIcon(item) {
        switch  (item) {
            case "anger":
                return "./frontend/assets/images/anger.svg";
            case "contempt":
                return "./frontend/assets/images/contempt.svg";
            case "disgust":
                return "./frontend/assets/images/disgust.svg";
            case "fear":
                return "./frontend/assets/images/fear.svg";
            case "happiness":
                return "./frontend/assets/images/happiness.svg";
            case "neutral":
                return "./frontend/assets/images/neutral.svg";
            case "sadness":
                return "./frontend/assets/images/sadness.svg";
            case "surprise":
                return "./frontend/assets/images/surprise.svg";
        }
    }

    convertDateToString() {

    }

    render() {
        return (
            <div className="feed-container">
                {
                    this.state.feed.map( item => {
                        return(
                            <div className="feed-item">
                                <img src={this.determineEmotionIcon(item.emotion)} alt=""/>
                                <div className="feed-details">
                                    <span className="feed-item-timestamp">{item.time}</span>
                                    <span>&#8226;</span>
                                    <span className="feed-item-emotion">{item.emotion}</span>
                                    <br/>
                                    <span className="image-link">Witness</span>
                                    <div className="image-wrapper">
                                        <img className="face-tooltip" src="./frontend/assets/images/cry.jpg"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}