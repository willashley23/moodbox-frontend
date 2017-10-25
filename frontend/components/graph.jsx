import React from 'react';

export default class Graph extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
           var chart = AmCharts.makeChart( "chartdiv", {
          "type": "pie",
          "theme": "light",
          "dataProvider": this.props.data,
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
          <div id="chartdiv" className="piechart"></div>
        );
    }
}