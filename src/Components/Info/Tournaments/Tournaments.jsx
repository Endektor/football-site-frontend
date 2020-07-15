import React, { Component } from 'react';
import TournamentsService from '../../Services/TournamentsService.js';
import TeamsService from '../../Services/TeamsService.js';
import Membership from "../Membership/Membership";

const tournamentsService = new TournamentsService();


class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournaments: [],
            nextPageURL: '',
            previousPageURL: ''
        };
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    componentDidMount() {
        const self = this;
        tournamentsService.getTournaments().then(function (result) {
            self.setState({ tournaments: result.data, nextPageURL: result.nextlink, prevPageURL: result.prevlink})
        });
    }

    nextPage(){
        const self = this;
        tournamentsService.getTournamentsByURL(this.state.nextPageURL).then((result) => {
            self.setState({ tournaments: result.data, nextPageURL: result.nextlink, prevPageURL: result.prevlink})
        });
    }

    previousPage(){
        const self = this;
        tournamentsService.getTournamentsByURL(this.state.previousPageURL).then((result) => {
            self.setState({ tournaments: result.data, nextPageURL: result.nextlink, prevPageURL: result.prevlink})
        });
    }

    render() {

        return (
            <div>
                {this.state.tournaments.map(tournament =>
                    <div key={tournament.id}>
                        <hr/>
                        <hr/>
                        <hr/>
                        <p>id турнира: {tournament.id}</p>
                        <p>название турнира: {tournament.name}</p>
                        {tournament.members.map((team, index) =>
                            <div>
                                <hr/>
                                <p>название команды: {team.name}</p>
                                <Membership state={tournament.member_detail[index]}/>

                            </div>
                        )}

                        {console.log(tournament)}
                    </div>
                )}
                <button onClick={this.previousPage}>Previous</button>
                <button onClick={this.nextPage}>Next</button>
            </div>

        );
    }
}

export default News;