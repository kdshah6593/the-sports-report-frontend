import React from 'react';
import TeamResults from './TeamResults'

class TeamForm extends React.Component {
    state = {
        searchTeam: "",
        searchResults: [],
        searched: false
    }

    handleSearchChange = (event) => {
        console.log(event.target.value)
        this.setState({
            searchTeam: event.target.value
        })
    }
    
    handleSearchSubmit = (event) => {
        event.preventDefault()
        const url = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t="
        console.log("Form has been submitted")
        let team = this.state.searchTeam.replace(" ", "%20")
        console.log(team)
        this.setState({
            searchTeam: ""
        })
        fetch(url+`${team}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.teams)
            this.setState({
                searchResults: data.teams,
                searched: true
            })
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSearchSubmit}>
                    <label htmlFor="searchTeam">Search for the Team: </label>
                    <input type="text" name="searchTeam" onChange={this.handleSearchChange} value={this.state.searchTeam} />
                    <input type="submit" value="Search" />
                </form>
                {this.state.searched === true ? <TeamResults searchResults={this.state.searchResults}/> : "No Search Performed"}
            </div>
        )
    }
}

export default TeamForm;