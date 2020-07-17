import React, { Component } from 'react';
import TournamentsService from '../../Services/TournamentsService.js';
import MatchesService from '../../Services/MatchesService.js';
import Membership from "../Membership/Membership";

const tournamentsService = new TournamentsService();
const matchesService = new MatchesService();


class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournaments: [],
            matches: [],
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
        matchesService.getMatches().then(function (result) {
            self.setState({ matches: result.data})
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
                            <div key={tournament.id*100 + team.id}>
                                <hr/>
                                <p>название команды: {team.name}</p>
                                <Membership state={tournament.member_detail[index]}/>

                            </div>
                        )}
                    </div>
                )}
                {console.log(this.state)}
                <button onClick={this.previousPage}>Previous</button>
                <button onClick={this.nextPage}>Next</button>
            </div>

        );
    }
}

export default News;