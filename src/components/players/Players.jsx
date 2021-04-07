import React from 'react';
import Player from './Player';


class Players extends React.Component {
    state = {
        selectedPlayer: ""
    }
    
    selectPlayer = (player) => {
        console.log("ive been clicked");
        this.setState({ 
            selectedPlayer: player
        })
    }

    render() {
        const players = this.props.players.map( (player, index) => <li key={index} onClick={() => this.selectPlayer(player)}>{player.name}</li>);
        return (
            <div>
                <div>
                    <h4>Player List</h4>
                    <ul>
                        {players}
                    </ul>
                </div>
                <div>
                    <h4>Player Details</h4>
                    {this.state.selectedPlayer ? <Player key={this.state.selectedPlayer.sportsDBId} player={this.state.selectedPlayer} /> : <p>No Player Selected</p> }
                </div>

            </div>
        )
    }
}

export default Players;

// this component will render a mapped list of user player