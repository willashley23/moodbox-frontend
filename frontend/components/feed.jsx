import React from 'react';

export default class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {
                    time: "11:55",
                    emotion: "Angry",
                    img: "tbd",
                },
                {
                    time: "11:55",
                    emotion: "Sad",
                    img: "tbd",
                },
                {
                    time: "11:55",
                    emotion: "Tragic",
                    img: "tbd",
                },
                {
                    time: "11:55",
                    emotion: "Grumpy",
                    img: "tbd",
                },
                {
                    time: "11:55",
                    emotion: "Joyous",
                    img: "tbd",
                },
            ]
        }
    }

    componentDidMount() {
        // Get last 5 writes
        // Set up web socket listener
    }

    render() {
        return (
            <div className="feed-container">
                {
                    this.state.feed.map( item => {
                        return(
                            <div className="feed-item">
                                <img src="./frontend/assets/images/frown.png" alt=""/>
                                <div className="feed-details">
                                    <span className="feed-item-timestamp">{item.time}</span>
                                    <span>&#8226;</span>
                                    <span className="feed-item-emotion">{item.emotion}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}