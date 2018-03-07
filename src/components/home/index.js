// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';
// import the Chart component
import Chart from '../chart';
// import the Navbar component
import Navbar from '../navbar';
	
export default class Home extends Component {

	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp = "";
		// button display state
		this.setState({ display: false });
        this.fetchWeatherData();
	}

	// a call to fetch weather data via wunderground
    fetchWeatherData = () => {
        // API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
        var url = "http://api.wunderground.com/api/b61e654874383964/conditions/q/PL/Zakopane.json";
        $.ajax({
            url: url,
            dataType: "jsonp",
            success : this.parseResponse,
            error : function(req, err){ console.log('API call failed ' + err); }
        })
        // once the data grabbed, hide the button
        //this.setState({ display: false });
    }

	parseResponse = (parsed_json) => {
		var location = parsed_json['current_observation']['display_location']['city'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];
        var precipitation = parsed_json['current_observation']['precip_today_metric'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions,
            precip : precipitation
		});      
	}

    showAlert = () => {
        alert("ASDF");
    }

    // rendering a function when the button is clicked
    render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;

        return (
            <div class={ style.container }>
                <div class={ style.header }>
                    <div class={ style.city }>{ this.state.locate }</div>
                    <div class={ style.conditions }>{ this.state.cond }</div>
                    <span class={ tempStyles }>{ this.state.temp }</span>
                    <span>{ this.state.precip }</span>
                </div>
                <div class={ style.details }></div>
                <Chart />
                <Navbar />
            </div>
        );
    }
}
