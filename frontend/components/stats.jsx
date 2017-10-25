import React from 'react';
import Superlatives from './superlatives'
import Graph from './graph'
export default class Stats extends React.Component {

    constructor(props) {
        super(props);
        this.injectColors = this.injectColors.bind(this);
        this.colors = ["#1dbb9b","#2F3953","#E56765","#ABD9D2", "#FEF7DC", "#E8B36F"];
        this.state = {
            moodScore: 5.7,
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
            chartData: [
                {
                    "emotion": "Angry",
                    "value": 260,
                },
                {
                    "emotion": "Disgust",
                    "value": 201,
                },
                {
                    "emotion": "Happy",
                    "value": 65,
                },
                {
                    "emotion": "Neutral",
                    "value": 39,
                },
            ],
        };

    }

    componentDidMount() {

    }

    componentWillMount() {
        this.injectColors();
    }

    injectColors() {
        this.colors.reverse();
        this.state.chartData.forEach(el => {
            el.color = this.colors.pop();
        })
    }

    render() {
        return (
            <main>
                <div className="first"></div>
                <div className="second"></div>
                <div className="third"></div>
                <div className="stats-container">
                    <div className="mbx-logo"></div>
                    <div className="mbx-score">{this.state.moodScore}</div>
                    <div className="data-wrapper">
                        <Graph data={this.state.chartData}/>
                        <Superlatives categories={this.state.testSuper}/>
                    </div>
                </div>
            </main>
        )
    }
}