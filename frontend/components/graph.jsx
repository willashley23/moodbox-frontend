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
          "depth3D": 15,
          "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
          "angle": 30,
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