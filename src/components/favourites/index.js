    // import preact
    import { h, render, Component } from 'preact';
    // import stylesheets for ipad & button
    import style from './style';
    //import style_iphone from '../button/style_iphone';
    // import jquery for API calls
    import $ from 'jquery';
     import Navbar from  '../navbar';
    //import Button from '../button';

    export default class Iphone extends Component {
    //var Iphone = React.createClass({

        // a constructor with initial set states
        constructor(props){
            super(props);
            // temperature state
            //this.state.temp = "";
            // button display state
            //this.setState({ display: true });
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
            //this.setState({ display: false });
        }
        
        // the main render method for the iphone component
        render() {
            // check if temperature data is fetched, if so add the sign styling to the page
            const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
            
            // display all weather data
            return (
                <div class={ style.container }>
                
                    <div class={ style.header}>
                    <h5> Welcome to Favourites! </h5>
                        <select id = "place" onchange = { this.fetchWeatherData }>
                     		<option selected = "true" disabled>Location</option>
                         	<option value="GB/London">UK</option>
                            <option value="PL/Warsaw">Poland</option>
                            <option value="IT/Milan">Italy</option>
                        </select>
                    </div>
                    
                    
                    <div class={ style.city }>{ this.state.locate }</div>
                    <div class={ style.conditions }>{ this.state.cond }</div>
                    <span class={ tempStyles }>{ this.state.temp }</span>
                    
                    <Navbar />
                
                    
                        
                    
                </div>
            );
        }

        parseResponse = (parsed_json) => {
            var location = parsed_json['current_observation']['display_location']['city'];
            var temp_c = parsed_json['current_observation']['temp_c'];
            var conditions = parsed_json['current_observation']['weather'];

            // set states for fields so they could be rendered later on
            this.setState({
                locate: location,
                temp: temp_c,
                cond : conditions
            });      
        }
    }