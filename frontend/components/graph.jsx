import React from 'react';
import Websocket from 'react-websocket'

export default class Graph extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //
    //        var chart = AmCharts.makeChart( "chartdiv", {
    //       "type": "pie",
    //       "theme": "light",
    //       "dataProvider": this.props.data,
    //       "valueField": "value",
    //       "titleField": "emotion",
    //       "outlineAlpha": 0.4,
    //       "depth3D": 0,
    //       "balloonText": "<span style='font-size: 20px;'>[[title]]</span><br><span style='font-size:18px'><b style='font-size: 20px;'>[[value]]</b> ([[percents]]%)</span>",
    //       "angle": 0,
    //        "colorField": "color",
    //       "export": {
    //         "enabled": true
    //       }
    //     });
    // }

    // maybe component did mount
    componentWillMount() {
        const ws = new WebSocket("ws://opencv.fbx.im:8080/get_statistics");
        ws.onopen = function() {
           ws.send("get_statistics");
        };
        ws.onmessage = function (evt) {
            console.log(evt.data);
            this.generateGraph(evt.data)
            //evt.data.stats?
        };
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

    render() {
        return(
            <div>
                <div id="chartdiv" className="piechart"></div>
            </div>
        );
    }
}