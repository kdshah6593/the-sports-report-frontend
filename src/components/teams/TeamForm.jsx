import React from 'react';
import TeamResults from './TeamResults'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import '../../Form.css';

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
        this.setState({
            searchTeam: ""
        })
        fetch(url+`${team}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                searchResults: data.teams,
                searched: true
            })
        })
    }

    render() {
        return (
            <Paper className="form">
                <form className="center" onSubmit={this.handleSearchSubmit}>
                    <label className="heading" htmlFor="searchTeam">Team Search</label>
                    <br></br>
                    <TextField type="text" name="searchTeam" onChange={this.handleSearchChange} value={this.state.searchTeam} variant="outlined" size="small" />
                    <br></br><br></br>
                    <input type="submit" value="Search" />
                </form>
                <br></br>
                {this.state.searched === true ? <TeamResults searchResults={this.state.searchResults}/> : <p className="center">No Search Performed</p>}
            </Paper>
        )
    }
}

export default TeamForm;