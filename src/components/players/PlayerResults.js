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
        // this will send a fetch post request to the backend
        // create the object here with the information needed for backend like name, sport, team to be stringifed
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