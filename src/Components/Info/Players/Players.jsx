import React, { Component } from 'react';
import PlayersService from '../../Services/PlayersService';

const playersService = new PlayersService();

class Players extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            nextPageURL: '',
            prevPageURL: ''
        };
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
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

    prevPage(){
        const self = this;
        playersService.getPlayersByURL(this.state.prevPageURL).then((result) => {
            self.setState({ players: result.data, prevPageURL: result.prevlink})
        });
    }

    render() {

        return (
            <div>
                {this.state.players.map( player =>
                    <div key={player.id}>
                        <p>ID игрока: {player.id}</p>
                        <p>Имя: {player.first_name}</p>
                        <p>Фамилия: {player.last_name}</p>
                        <p>Позиция: {player.position}</p>
                    </div>
                )}
                <button onClick={ this.prevPage }>Previous</button>
                <button onClick={ this.nextPage }>Next</button>
            </div>
        );
    }
}
export default Players;