import React from 'react';

class PlayerResults extends React.Component {
    state = {
        selectedOption: "",
        searchResults: this.props.searchResults
    }

    
    
    handleOptionChange = (event) => {
        console.log(event.target.value)
        this.setState({
            selectedOption: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const selectedPlayer = this.state.searchResults[this.state.selectedOption]
        const dataToSend = {
            name: selectedPlayer.strPlayer,
            sport: selectedPlayer.strSport,
            team: selectedPlayer.strTeam,
            sportsDBId: selectedPlayer.idPlayer
        }

        fetch("http://localhost:3001/api/v1/players", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    
    render() {
        const players = this.props.searchResults.map((player, index) => <label key={player.idPlayer}><input type="radio" name="player" value={index} onChange={this.handleOptionChange}/>{player.strPlayer} - {player.strSport}</label>)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {players}
                    <input type="submit" value="Add Player" />
                </form>
            </div>
        )
    }
}

export default PlayerResults;