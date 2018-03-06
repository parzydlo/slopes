// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
// precharts components
import { ComposedChart, Area, Line, XAxis, CartesianGrid, Tooltip } from 'precharts';

export default class Chart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const DATA = [
            { name: 'A', a: 4000, b: 2400 },
            { name: 'B', a: 3000, b: 1398 },
            { name: 'C', a: 2000, b: 9800 },
            { name: 'D', a: 2780, b: 3908 },
            { name: 'E', a: 1890, b: 4800 },
            { name: 'F', a: 2390, b: 3800 },
            { name: 'G', a: 3490, b: 4300 }
        ];
        return (
            <div class={ style.chart }>
                <ComposedChart width={414 * 0.85} height={200} data={DATA}>
                    <XAxis dataKey="name" orientation="bottom" height={20} />
                    <CartesianGrid strokeDasharray="5 5" />
                    <Line dataKey="a" stroke="red" />
                    <Area dataKey="b" fill="green" opacity={.3} />
                    <Tooltip />
                </ComposedChart>
            </div>
        )
    }
}
