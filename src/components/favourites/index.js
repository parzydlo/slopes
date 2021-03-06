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
        
        updateData =()=>{
           this.fetchWeatherData();
            //alert("data got");
            this.fetchYData();
        }

        // a call to fetch weather data via wunderground
        fetchWeatherData = () => {
            var e1 = document.getElementById("place").value;
            //var strUser = e.options[e.selectedIndex].text;
            var url = "http://api.wunderground.com/api/b61e654874383964/conditions/q/";
            
            
            // API URL with a structure of : http://api.wunderground.com/api/key/feature/q/country-code/city.json
             url += e1 +".json";
            
            $.ajax({
                url: url,
                dataType: "jsonp",
                success : this.parseResponse,
                error : function(req, err){ console.log('API call failed ' + err); }
            })
            // once the data grabbed, hide the button
            //this.setState({ display: false });
        }
        
        fetchYData = () => {
            var e = document.getElementById("place").value;
            //var strUser = e.options[e.selectedIndex].text;
            var url = "http://api.wunderground.com/api/b61e654874383964/yesterday/q/";
            
            
            // API URL with a structure of : http://api.wunderground.com/api/key/feature/q/country-code/city.json
             url += e +".json";
            //alert(url);
            $.ajax({
                url: url,
                dataType: "jsonp",
                success : function(parsed_json){
                   // alert("run pt2");
                    var s = parsed_json['history']['snowdepthi'];
                   
                    if (s==null)
                    {
                        this.setState({
                           snow: "unavalable"  });      

                    }
                    else {
                        this.setState({
                            snow: "avalable"  });  
                    }
                    
                    
                },
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
                        <select id = "place" onchange = { this.updateData }>
                     		<option selected = "true" disabled>Location</option>
                         	<option value="CH/St._Moritz">St. Moritz, Switzerland</option>
                            <option value="IT/Cortina_d'Ampezzo">Cortina d&#39;Ampezzo, Italy</option>
                            <option value="FR/Chamonix">Chamonix-Mont Blanc, France</option>
                            <option value="FR/Val_Thorens">Val Thorens, France</option>
                        </select>
                    </div>
                    
                    
                    <div class={ style.city }>{this.state.locate}
                    </div>
                    <div class={ style.conditions }>{this.state.cond}
                    <br/>{ this.state.windkph }
                    <br/>{ this.state.precip }
                    <br/>{this.state.snow}
                    </div>
                    <span class={ tempStyles }>{ this.state.temp} </span>
                                        
                    
                    <Navbar />
                
                    
                        
                    
                </div>
            );
        }

        parseResponse = (parsed_json) => {
            var location = parsed_json['current_observation']['display_location']['city'];
            var temp_c = parsed_json['current_observation']['temp_c'];
            var conditions = parsed_json['current_observation']['weather'];
            var wind = parsed_json['current_observation']['wind_kph'];
            var prec = parsed_json['current_observation']['precip_today_in'];
    

            // set states for fields so they could be rendered later on
            this.setState({
                locate: location,
                temp: Math.round(temp_c),
                cond : conditions,
                windkph : "Wind Speed: "+wind + " kph",
                precip: "current snow falling: "+ prec + " inches",
                snow: "Snow Depth: Unavaliable"
            });      
        }
        
        
        
    }