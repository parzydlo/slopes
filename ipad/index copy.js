// import preact 
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_ipad from '../button/style_ipad';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';
// import combobox
//import Combo from 'react-bootstrap-combobox';


export default class Ipad extends Component {
//var Ipad = React.createClass({

//function pic()
//{
//	
//}




	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp = "";
		// button display state
		this.setState({ display: true });
    }

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		var e = document.getElementById("place").value;
		//var strUser = e.options[e.selectedIndex].text;
		var url = "http://api.wunderground.com/api/b61e654874383964/conditions/q/";
		
		
		// API URL with a structure of : http://api.wunderground.com/api/key/feature/q/country-code/city.json
		 url += e +".json";
		
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		this.setState({ display: false });
	}

	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;

		// display all weather data
		return (
			<div class={ style.container }>
				<div class={ style.header }>
					<select id = "place" onchange = { this.fetchWeatherData }>
					 		<option value ="" disabled>Location</option>
						 	<option value="GB/London">UK</option>
							<option value="PL/Warsaw">Poland</option>
							<option value="IT/Milan">Italy</option>
					</select>
				</div>
				<div class={ style.details }></div>
				<div class={ style_ipad.container }>
				<div class={ style.city }>{ this.state.locate }</div>
				<div class={ style.conditions }>{ this.state.cond }</div>
				</div>
			</div>
		);
	}

	parseResponse = (parsed_json) => {
		var city = parsed_json['current_observation']['display_location']['city'];
		var country = parsed_json['current_observation']['display_location']['country'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];
		var wind = parsed_json['current_observation']['wind_mph'];

		// set the states for fields so they could be rendered later on
		this.setState({
			currentCity: city,
			currentCountry: country,
			temp: temp_c,
			cond: conditions,
			cond: conditions,
			wind: wind_mph
		});      
	}
}