import React, {useState} from 'react';
import { useHistory } from 'react-router';

const PlayerResults = (props) => {
    // state = {
    //     selectedOption: "",
    //     searchResults: this.props.searchResults
    // }

    const [selectedOption, setSelectedOption] = useState("");
    const [searchResults, setSearchResults] = useState(props.searchResults)

    let history = useHistory()

    const handleOptionChange = (event) => {
        console.log(event.target.value)
        setSelectedOption(event.target.value)
        // this.setState({
        //     selectedOption: event.target.value
        // })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedPlayer = searchResults[selectedOption]
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
        .then(updatedUser => {
            {/* Need to update the store with mapDispatchToProps Here */}
            history.push("http://localhost:3000/home/players")
        })
    }
    
    const players = props.searchResults.map((player, index) => <label key={player.idPlayer}><input type="radio" name="player" value={index} onChange={handleOptionChange}/>{player.strPlayer} - {player.strSport}</label>)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {players}
                <input type="submit" value="Add Player" />
            </form>
        </div>
    )
}

export default PlayerResults;