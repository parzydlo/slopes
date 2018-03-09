// import preact
import { h, render, Component } from 'preact';
import style from './style';
import Navbar from '../navbar';

export default class Explore extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class={ style.container }>
                <h5>Welcome to Explore!</h5>
                <Navbar />
                <a href="https://www.google.co.uk/maps/place/Informatics+Teaching+Laboratory/@51.5229108,-0.0435733,19z/data=!4m5!3m4!1s0x48761d2f4ebb40dd:0xc0cca7de33120519!8m2!3d51.5240666!4d-0.0403753">
                  <img src="https://maps.googleapis.com/maps/api/staticmap?center=Informatics+Teaching+Laboratory/@51.5229108,-0.0435733&zoom=17&size=350x530&maptype=roadmap&key=AIzaSyCnvKszwfLiy-PjlrD6Nl9XNXECUU0rDqw"></img>
                </a>
            </div>
        )
    }
}
