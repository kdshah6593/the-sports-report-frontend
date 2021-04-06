import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

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
                "Accept": "application/json"
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
        teams = props.searchResults.map((team, index) => <label key={team.idTeam}><input type="radio" name="team" value={index} onChange={handleOptionChange}/>{team.strTeam} - {team.strLeague}</label>)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {teams}
                <input type="submit" value="Add Team" />
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTeam: userData => dispatch({ type: 'ADD_TEAM', payload: userData })
    }
}

export default connect(null, mapDispatchToProps)(TeamResults);