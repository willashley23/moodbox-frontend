import React from 'react';
import Superlatives from './superlatives'
import Graph from './graph'
export default class Stats extends React.Component {

    constructor(props) {
        super(props);
        // this.injectColors = this.injectColors.bind(this);
        this.isEnabled = this.isEnabled.bind(this);
        this.colors = ["#1dbb9b","#2F3953","#E56765","#ABD9D2", "#FEF7DC", "#E8B36F"];
        this.state = {
            testSuper: [
                {
                    category: "Saddest Fundboxer",
                    name: "Billy Bob",
                    img: "./frontend/assets/images/frown.png",
                },
                {
                    category: "Happiest Fundboxer",
                    name: "Jane Plain",
                    img: "./frontend/assets/images/smile.png",
                },
                {
                    category: "Angriest Fundboxer",
                    name: "Patty Picky",
                    img: "./frontend/assets/images/frown.png",
                },
                {
                    category: "Sleepiest Fundboxer",
                    name: "Nelly Negative",
                    img: "./frontend/assets/images/smile.png",
                },
            ],
        };

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
                    <div className="mbx-score">{this.state.moodScore}</div>
                    <div className="data-wrapper">
                        <Graph />
                        <div className="vr"></div>
                        <Superlatives categories={this.state.testSuper}/>
                    </div>
                </div>
            </main>
        )
    }
}