import React, { Component } from 'react';
import PlayersService from '../../Services/PlayersService';

const playersService = new PlayersService();

class Players extends Component {

    constructor(props) {
        super(props);
        this.state = {
            player: [],
        };
    }

    componentDidMount() {
        const self = this;
        const { match: { params } } = this.props;
        playersService.getPlayer(params.id).then(function (result) {
            self.setState({ player: result})
        });
    }

    render() {

        return (
            <div>
                <p>ID игрока: {this.state.player.id}</p>
                <p>Имя: {this.state.player.first_name}</p>
                <p>Фамилия: {this.state.player.last_name}</p>
                <p>Позиция: {this.state.player.position}</p>
                <p>Другая информация</p>
                {console.log(this)}
            </div>
        );
    }
}
export default Players;