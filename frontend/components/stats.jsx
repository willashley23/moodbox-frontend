import React from 'react';

export default class Stats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
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
                    <div className="graph">some content</div>
                    <div className="super">even moar!</div>
                </div>
            </main>
        )
    }
}