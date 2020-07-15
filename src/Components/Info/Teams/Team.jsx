import React, { Component } from 'react';
import TeamsService from '../../Services/TeamsService';

const teamsService = new TeamsService();

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            team: [],
            players: [],
        };
    }

    componentDidMount() {
        const self = this;
        const { match: { params } } = this.props;
        teamsService.getTeam(params.id).then(function (result) {
            self.setState({team: result.data, players: result.players})
        });
    }

    render() {

        return (
            <div>
                <p>ID команды: {this.state.team.id}</p>
                <p>название: {this.state.team.name}</p>
                <p>Участники:</p>
                {this.state.players.map( player =>
                    <div key={player.id}>
                        <hr/>
                        <a href={"/players/" + player.id}>Профиль</a>
                        <p>ID игрока: {player.id}</p>
                        <p>имя игрока: {player.first_name}</p>
                        <p>фамилия игрока: {player.last_name}</p>
                    </div>
                )}
                <hr/>
                <p>Другая информация</p>
                {console.log(this.state)}
            </div>
        );
    }
}
export default Team;