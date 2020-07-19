import React, { Component } from 'react';
import TournamentsService from '../../Services/TournamentsService.js';


const tournamentsService = new TournamentsService();


class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournaments: [],
        };

    }

    componentDidMount() {
        const self = this;
        const { match: { params } } = this.props;
        tournamentsService.getTournament(params.id).then(function (result) {
            self.setState({ tournaments: result.data})
        });
    }


    render() {

        return (
            <div>
                {console.log(this)}
            </div>

        );
    }
}

export default News;