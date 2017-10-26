import React from 'react';
import Superlatives from './superlatives'
import Graph from './graph'
export default class Stats extends React.Component {

    constructor(props) {
        super(props);
        this.isEnabled = this.isEnabled.bind(this);
        this.state = {};
    }

    componentWillMount() {
        fetch("http://opencv.fbx.im:8080/get_score").then(response => {
            response.json().then(data => {
                this.setState({moodScore: parseFloat(data.score)}, () => {
                    console.log(data.score);
                })
            })
        })
    }


    isEnabled() {
        if (this.state.moodScore > 0 && this.state.moodScore < 5) {
            return "active-bad";
        } else if (this.state.moodScore < 7.5) {
            return "active-neutral";
        } else {
            return "active-good";
        }
    }

    render() {
        return (
            <main>
                <div className={"first " + this.isEnabled()}></div>
                <div className={"second " + this.isEnabled()}></div>
                <div className={"third " + this.isEnabled()}></div>
                <div className="stats-container">
                    <div className="mbx-logo"></div>
                    <div className="data-wrapper">
                        <Graph />
                        <div className="vr"></div>
                        <div className="mbx-score">{this.state.moodScore}</div>
                    </div>
                </div>
            </main>
        )
    }
}