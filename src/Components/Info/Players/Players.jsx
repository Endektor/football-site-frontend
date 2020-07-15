import React, { Component } from 'react';
import PlayersService from '../../Services/PlayersService';

const playersService = new PlayersService();

class Players extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            nextPageURL: '',
            previousPageURL: ''
        };
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    componentDidMount() {
        const self = this;
        playersService.getPlayers().then(function (result) {
            self.setState({ players: result.data, nextPageURL: result.nextlink})
        });
    }


    nextPage(){
        const self = this;
        playersService.getPlayersByURL(this.state.nextPageURL).then((result) => {
            self.setState({ players: result.data, nextPageURL: result.nextlink})
        });
    }

    previousPage(){
        const self = this;
        playersService.getPlayersByURL(this.state.previousPageURL).then((result) => {
            self.setState({ players: result.data, previousPageURL: result.previouslink})
        });
    }

    render() {

        return (
            <div>
                {this.state.players.map( player =>
                    <div key={player.id}>
                        <p>{player.id}</p>
                        <p>{player.name}</p>
                        <p>{player.last_name}</p>
                        <p>{player.position}</p>
                    </div>
                )}
                <button onClick={ this.previousPage }>Previous</button>
                <button onClick={ this.nextPage }>Next</button>
            </div>
        );
    }
}
export default Players;