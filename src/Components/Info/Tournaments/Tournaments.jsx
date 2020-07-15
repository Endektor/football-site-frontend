import React, { Component } from 'react';
import TournamentsService from '../../Services/TournamentsService.js';
import TeamsService from '../../Services/TeamsService.js';

const tournamentsService = new TournamentsService();
const teamsService = new TeamsService();


class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournaments: [],
            teams: [],
            nextPageURL: '',
            previousPageURL: ''
        };
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    componentDidMount() {
        const self = this;
        tournamentsService.getTournaments().then(function (result) {
            self.setState({ tournaments: result.data, nextPageURL: result.nextlink})
        });
        teamsService.getTeams().then(function (result) {
            self.setState({ teams: result.data})
        });
    }

    nextPage(){
        const self = this;
        tournamentsService.getTournamentsByURL(this.state.nextPageURL).then((result) => {
            self.setState({ tournaments: result.data, nextPageURL: result.nextlink})
        });
    }

    previousPage(){
        const self = this;
        tournamentsService.getTournamentsByURL(this.state.previousPageURL).then((result) => {
            self.setState({ tournaments: result.data, previousPageURL: result.previouslink})
        });
    }

    render() {

        return (
            <div>
                {this.state.tournaments.map(tournament =>
                    <div key={tournament.id}>
                        <p>{tournament.id}</p>
                        <p>{tournament.name}</p>
                        <p>{tournament.games_amount}</p>
                        <p>{tournament.members}</p>
                        {//this.state.tournaments.members[0].map(team_id =>
                            //<Membership team={this.state.teams.team_id} tournament={tournament.name})}
                        }
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