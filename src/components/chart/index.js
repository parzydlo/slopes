// import preact
import { h, render, Component } from 'preact';
// If you are using ES6, then
//import * from 'canvasjs';


export default class Chart extends Component {

    // rendering a function when the button is clicked
    render() {
        var chart = new CanvasJS.Chart("chartContainer", {
            title:{
                text: "My First Chart in CanvasJS"
            },
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: [
                        { label: "apple",  y: 10  },
                        { label: "orange", y: 15  },
                        { label: "banana", y: 25  },
                        { label: "mango",  y: 30  },
                        { label: "grape",  y: 28  }
                    ]
                }
            ]
        });
        //chart.render();
        return (
            <div id="chartContainer" style="height: 300px; width: 100%;"></div>
        );
    }
}
