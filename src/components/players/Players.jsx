import React, { useState } from 'react';
import Player from './Player';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/fetchArticles';

const Players = (props) => {
    const [selectedPlayer, useSelectedPlayer] = useState("")
    
    const selectPlayer = (player) => {
        useSelectedPlayer(player)
        this.props.fetchArticles(player)
    }

    const players = props.players.map( (player, index) => <li key={index} onClick={() => selectPlayer(player)}>{player.name}</li>);
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
                {selectedPlayer ? <Player key={selectedPlayer.sportsDBId} player={selectedPlayer} /> : <p>No Player Selected</p> }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: (player) => dispatch(fetchArticles(player))
    }
}

export default connect(null, mapDispatchToProps)(Players);