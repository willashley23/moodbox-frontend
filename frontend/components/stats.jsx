import React from 'react';
import Superlatives from './superlatives'
import Graph from './graph'
export default class Stats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moodScore: 5.7,
            testSuper: [
                {
                    category: "Saddest Fundboxer",
                    name: "Billy Bob",
                    img: "./idk",
                },
                {
                    category: "Happiest Fundboxer",
                    name: "Jane Plain",
                    img: "./idk",
                },
                {
                    category: "Angriest Fundboxer",
                    name: "Patty Picky",
                    img: "./idk",
                },
                {
                    category: "Most Contemptuous Fundboxer",
                    name: "Nelly Negative",
                    img: "./idk",
                },
            ],
            chartData: [
                {
                    "emotion": "Angry",
                    "value": 260
                },
                {
                    "emotion": "Disgust",
                    "value": 201
                },
                {
                    "emotion": "Happy",
                    "value": 65
                },
                {
                    "emotion": "Neutral",
                    "value": 39
                },
            ],
        };

    }

    componentDidMount() {

    }

    componentWillMount() {

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
                    <Graph data={this.state.chartData}/>
                    <Superlatives categories={this.state.testSuper}/>
                </div>
            </main>
        )
    }
}