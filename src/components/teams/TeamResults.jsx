import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import '../../Form.css';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const TeamResults = (props) => {

    const [selectedOption, setSelectedOption] = useState("");
    const [searchResults, setSearchResults] = useState(props.searchResults)

    let history = useHistory()
    
    const handleOptionChange = (event) => {
        console.log(event.target.value)
        setSelectedOption(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedTeam = searchResults[selectedOption]

        const dataToSend = {
            name: selectedTeam.strTeam,
            sport: selectedTeam.strSport,
            sportsDBId: selectedTeam.idTeam
        }

        fetch("http://localhost:3001/api/v1/teams", {
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
        teams = props.searchResults.map((team, index) => <FormControlLabel key={team.idTeam} value={index} label={`${team.strTeam} - ${team.strLeague}`} control={<Radio />} />)
    }

    return (
        <div className="center">
            <FormControl component='fieldset'>
                <form onSubmit={handleSubmit}>
                    <RadioGroup onChange={handleOptionChange}>
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