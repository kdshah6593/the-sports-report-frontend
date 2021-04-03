import React from 'react';

class PlayerResults extends React.Component {
    render() {
        const players = this.props.searchResults.map(player => <label><input type="radio" name="player" key={player.idPlayer} value={player.strPlayer}/>{player.strPlayer} - {player.strSport}</label>)
        return (
            <div>
                <form>
                    {players}
                    <input type="submit" value="Add Player" />
                </form>
            </div>
        )
    }
}

export default PlayerResults;