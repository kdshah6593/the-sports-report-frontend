import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import '../../Styles.css';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import { urlDomain } from '../actions/urlDomain';

const PlayerResults = (props) => {

    const [selectedOption, setSelectedOption] = useState("");
    const [searchResults, setSearchResults] = useState(props.searchResults)

    let history = useHistory()

    const handleOptionChange = (event) => {
        setSelectedOption(parseInt(event.target.value))
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

        fetch(urlDomain() + "/api/v1/players", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json())
        .then(updatedUser => {
            props.addPlayer(updatedUser.data)
            history.push("/players")
        })
    }
    
    const players = props.searchResults.map((player, index) => <FormControlLabel key={player.idPlayer} value={index} label={`${player.strPlayer} - ${player.strSport} - ${player.strTeam}`} control={<Radio style={{ color: '#E09F3E'}} />} />)
    return (
        <div className="center">
            <FormControl component='fieldset'>
                <form onSubmit={handleSubmit}>
                    <RadioGroup name="player1" value={selectedOption} onChange={handleOptionChange}>
                        {players}
                    </RadioGroup>
                    <input type="submit" value="Add Player" />
                </form>
            </FormControl>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: userData => dispatch({type: 'ADD_PLAYER', payload: userData })
    }
}

export default connect(null, mapDispatchToProps)(PlayerResults);