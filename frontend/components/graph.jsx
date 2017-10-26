import React from 'react';
import Websocket from 'react-websocket'

export default class Graph extends React.Component {

    constructor(props) {
        super(props);
        //this.injectColors = this.injectColors.bind(this);
        this.colors = ["#1dbb9b","#2F3953","#E56765","#ABD9D2", "#FEF7DC", "#E8B36F", "#999999", "#fff"];
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
                value: data[key],
                color: this.colors.shift(),
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

        this.setState({chart: chart});
    }

    // injectColors() {
    //     this.colors.reverse();
    //     Object.keys(this.state.data).map(el => {
    //         return(
    //             {
    //
    //             }
    //         );
    //         el.color = this.colors.pop();
    //     })
    // }

    render() {
        return(
            <div>
                <div id="chartdiv" className="piechart"></div>
            </div>
        );
    }
}