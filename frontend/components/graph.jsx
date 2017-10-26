import React from 'react';
import Websocket from 'react-websocket'

export default class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.injectColors = this.injectColors.bind(this);
        this.colors = ["#1dbb9b","#2F3953","#E56765","#ABD9D2", "#FEF7DC", "#E8B36F", "#1dbb9b"];
        this.state = {};
    }

    // maybe component did mount
    componentWillMount() {
        fetch("http://opencv.fbx.im:8080/get_statistics").then(response => {
            response.json().then(data => {
                this.setState({data: data}, () => {
                    this.generateGraph(data);
                })
            })
        })
    }


    generateGraph(data) {
        let sanitizedData = Object.keys(data).map(key => {
            return {
                emotion: key,
                value: data[key]
            }
        });
        var chart = AmCharts.makeChart( "chartdiv", {
            "type": "pie",
            "theme": "light",
            "dataProvider": sanitizedData,
            "valueField": "value",
            "titleField": "emotion",
            "outlineAlpha": 0.4,
            "depth3D": 0,
            "balloonText": "<span style='font-size: 20px;'>[[title]]</span><br><span style='font-size:18px'><b style='font-size: 20px;'>[[value]]</b> ([[percents]]%)</span>",
            "angle": 0,
            "colorField": "color",
            "export": {
            "enabled": true
            }
        });
    }

    injectColors() {
        this.colors.reverse();
        this.state.data.forEach(el => {
            el.color = this.colors.pop();
        })
    }

    render() {
        return(
            <div>
                <div id="chartdiv" className="piechart"></div>
            </div>
        );
    }
}