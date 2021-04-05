import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

const TeamResults = (props) => {
    state = {
        selectedOption: "",
        searchResults: this.props.searchResults
    }
    
    const handleOptionChange = (event) => {
        console.log(event.target.value)
        this.setState({
            selectedOption: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedTeam = this.state.searchResults[this.state.selectedOption]
        // this will send a fetch post request to the backend
        // create the object here with the information needed for backend like name, sport to be stringifed
    }

    const mapSearchResults = () => {
        if (this.props.searchResults === null) {
            return "No Results, please try again."
        } else {
            this.props.searchResults.map((team, index) => <label key={team.idTeam}><input type="radio" name="team" value={index} onChange={this.handleOptionChange}/>{team.strTeam} - {team.strLeague}</label>)
        }
    }

    const teams = this.mapSearchResults()
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                {teams}
                <input type="submit" value="Add Team" />
            </form>
        </div>
    )
}

export default TeamResults;