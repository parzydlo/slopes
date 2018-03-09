// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // button used to switch between page components
        return (
            <div class="nav nav-fill btn-group-3">
                <a class="btn btn-light" href="/">Home</a>
                <a class="btn btn-light" href="/favourites/">Favourites</a>
                <a class="btn btn-light" href="/explore/">Explore</a>
            </div>
        )
    }
}
