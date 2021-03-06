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

        // make sure that props have been received
        // only render when props are available
        //
        // render 3 different charts under bootstrap tabs
        const tempList = t && t.length ? (
            <div class={ style.chart }>
                <nav>
                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Temperature</a>
                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Snow</a>
                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Wind</a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <LineChart width={414} height={250} data={t} margin={{ top: 40, right: 20, left: -25, bottom: 10}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="hour" orientation="bottom" height={20} tick={{fontSize: 12}} />
                            <YAxis type="number" domain={[-10, 15]} axisLine={false} tick={{fontSize: 12}}/>
                            <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                            <Tooltip />
                        </LineChart>
                        <span>Time [h]</span>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <LineChart width={414} height={250} data={t} margin={{ top: 40, right: 20, left: -25, bottom: 10}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="hour" orientation="bottom" height={20} tick={{fontSize: 12}} />
                            <YAxis type="number" domain={[0, 20]} axisLine={false} tick={{fontSize: 12}}/>
                            <Line type="monotone" dataKey="snow" stroke="#8884d8" />
                            <Tooltip />
                        </LineChart>
                        <span>Time [h]</span>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <LineChart width={414} height={250} data={t} margin={{ top: 40, right: 20, left: -25, bottom: 10}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="hour" orientation="bottom" height={20} tick={{fontSize: 12}} />
                            <YAxis type="number" domain={[0, 40]} axisLine={false} tick={{fontSize: 12}}/>
                            <Line type="monotone" dataKey="wind" stroke="#8884d8" />
                            <Tooltip />
                        </LineChart>
                        <span>Time [h]</span>
                    </div>
                </div>
            </div>
        ) : null;

        return (
            <div>
                {tempList}
            </div>
        )
    }
}
