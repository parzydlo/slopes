// import preact
import { h, render, Component } from 'preact';
// import preact-router
import Router from 'preact-router';
import Match from 'preact-router/match';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';
// import the Home component
import Home from '../home';
// import the Favourites component
import Favourites from '../favourites';
// import the Explore component
import Explore from '../explore';

export default class Iphone extends Component {
	render() {
        // using preact-router to assign components (pages)
        // to specific URLs
		return (
            <div>
                <Router>
                    <Home path="/" />
                    <Favourites path="/favourites" />
                    <Explore path="/explore" />
                </Router>
            </div>
		);
	}

}
