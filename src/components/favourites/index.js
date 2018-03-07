// import preact
import { h, render, Component } from 'preact';
import style from './style';
import Navbar from '../navbar';

export default class Favourites extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class={ style.container }>
                <p>Welcome to Favourites!</p>
                <Navbar />
            </div>
        )
    }
}
