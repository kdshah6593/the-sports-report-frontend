import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import '../../Styles.css';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import { urlDomain } from '../../actions/urlDomain';

const TeamResults = (props) => {

    const [selectedOption, setSelectedOption] = useState("");
    const [searchResults, setSearchResults] = useState(props.searchResults)

    let history = useHistory()
    
    const handleOptionChange = (event) => {
        setSelectedOption(parseInt(event.target.value))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedTeam = searchResults[selectedOption]

        const dataToSend = {
            name: selectedTeam.strTeam,
            sport: selectedTeam.strSport,
            sportsDBId: selectedTeam.idTeam
        }

        fetch(urlDomain() + "/api/v1/teams", {
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
            props.addTeam(updatedUser.data)
            history.push("/teams")
        })
    }

    let teams; 
    if (props.searchResults === null) {
        teams = "No Results, please try again."
    } else {
        teams = props.searchResults.map((team, index) => <FormControlLabel key={team.idTeam} value={index} label={`${team.strTeam} - ${team.strLeague}`} control={<Radio style={{ color: '#E09F3E'}} />} />)
    }

    return (
        <div className="center">
            <FormControl component='fieldset'>
                <form onSubmit={handleSubmit}>
                    <RadioGroup name="team1" value={selectedOption} onChange={handleOptionChange}>
                        {teams}
                    </RadioGroup>
                    <input type="submit" value="Add Team" />
                </form>
            </FormControl>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTeam: userData => dispatch({ type: 'ADD_TEAM', payload: userData })
    }
}

export default connect(null, mapDispatchToProps)(TeamResults);