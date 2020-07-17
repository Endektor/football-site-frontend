import React, { Component } from 'react';
import TeamsService from '../../Services/TeamsService';

const teamsService = new TeamsService();

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            nextPageURL: '',
            previousPageURL: ''
        };
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    componentDidMount() {
        const self = this;
        teamsService.getTeams().then(function (result) {
            self.setState({ teams: result.data, nextPageURL: result.nextlink, prevPageURL: result.prevlink})
        });
    }


    nextPage(){
        const self = this;
        teamsService.getTeamsByURL(this.state.nextPageURL).then((result) => {
            self.setState({ teams: result.data, nextPageURL: result.nextlink, prevPageURL: result.prevlink})
        });
    }

    previousPage(){
        const self = this;
        teamsService.getTeamsByURL(this.state.previousPageURL).then((result) => {
            self.setState({ teams: result.data, nextPageURL: result.nextlink, prevPageURL: result.prevlink})
        });
    }

    render() {

        return (
            <div>
                {this.state.teams.map( team =>
                    <div key={team.id}>
                        <hr/>
                        <a href={"/teams/" + team.id}>Профиль</a>
                        <p>Id команды: {team.id}</p>
                        <p>название команды: {team.name}</p>
                        <p>количество игр: {team.games_amount}</p>
                        <p>победы: {team.wins_amount}</p>
                        <p>ничьи: {team.draws_amount}</p>
                        <p>поражения: {team.defeats_amount}</p>
                        <p>инфомация: {team.description}</p>

                    </div>
                )}
                {console.log(this.state)}
                <button onClick={ this.previousPage }>Previous</button>
                <button onClick={ this.nextPage }>Next</button>
            </div>
        );
    }
}
export default News;