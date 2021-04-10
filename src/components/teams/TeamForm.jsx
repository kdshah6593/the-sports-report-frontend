import React, {useState} from 'react';
import TeamResults from './TeamResults';
import { Paper, TextField } from '@material-ui/core';
import '../../Styles.css';

const TeamForm = (props) => {

    const [searchTeam, setSearchTeam] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searched, setSearched] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTeam(event.target.value);
    }
    
    const handleSearchSubmit = (event) => {
        event.preventDefault()
        const url = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t="
        console.log("Form has been submitted")
        let team = searchTeam.replace(" ", "%20")
        setSearchTeam("")
        fetch(url+`${team}`)
        .then(resp => resp.json())
        .then(data => {
            setSearchResults(data.teams);
            setSearched(true);
        })
    }

    return (
        <Paper className="form">
            <form className="center" onSubmit={handleSearchSubmit}>
                <label className="heading" htmlFor="searchTeam">Team Search</label>
                <br></br>
                <TextField type="text" name="searchTeam" onChange={handleSearchChange} value={searchTeam} variant="outlined" size="small" />
                <br></br><br></br>
                <input type="submit" value="Search" class="btn" />
            </form>
            <br></br>
            {searched !== true ? <p className="center subText">No Search Performed</p> : searchResults !== null ? <TeamResults searchResults={searchResults}/> : <p className="center subText">No Results Found</p> }
        </Paper>
    )
}

export default TeamForm;