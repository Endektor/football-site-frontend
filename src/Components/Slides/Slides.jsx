import React, { Component } from 'react';
import SlidesService from '../Services/SlidesService';

const slidesService = new SlidesService();

class Slides extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: [],
        };
    }

    componentDidMount() {
        const self = this;
        slidesService.getSlides().then(function (result) {
            self.setState({ slides: result.data[0]})
        });
    }

    render() {

        return (
            <div>
                <div>aaaaaaaaaaaaaaaaaaaaa</div>
                <img src={this.state.slides.img}/>
            </div>
        );
    }
}
export default Slides;