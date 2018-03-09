// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
// precharts components
import { LineChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'precharts';

export default class Chart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let t = this.props['temps'];

        const tempList = t && t.length ? (
            <div class={ style.chart }>
                <LineChart width={414} height={250} data={t} margin={{ top: 20, right: 20, left: -25, bottom: 10}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" orientation="bottom" height={20} />
                    <YAxis type="number" domain={[-10, 10]} axisLine={false} />
                    <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                    <Tooltip />
                </LineChart>
            </div>
        ) : null;

        return (
            <div>
                {tempList}
            </div>
        )
    }
}
