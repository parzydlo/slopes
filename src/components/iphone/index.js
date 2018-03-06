// import preact
import { h, render, Component } from 'preact';
// import preact-router
import Router from 'preact-router';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';
// import the Homecomponent
import Home from '../home';

// stateless router component
const Main = () => (
    <Router>
        <Home path="/" />
        <Favourites path="/favourites" />
        // Advanced is an optional query
        <Explore path="/explore" />
    </Router>
);

export default class Iphone extends Component {
//var Iphone = React.createClass({


	// the main render method for the iphone component
	render() {
		// display all weather data
		return (
            <Home /> 
		);
	}

}
