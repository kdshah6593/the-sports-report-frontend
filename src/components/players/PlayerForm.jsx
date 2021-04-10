import React, {useState} from 'react';
import PlayerResults from './PlayerResults'
import { Paper, TextField } from '@material-ui/core';
import '../../Styles.css';

const PlayerForm = (props) => {

    const [searchPlayer, setSearchPlayer] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searched, setSearched] = useState(false);

    const handleSearchChange = (event) => {
        setSearchPlayer(event.target.value);
    }
    
    const handleSearchSubmit = (event) => {
        event.preventDefault()
        const url = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p="
        console.log("Form has been submitted")
        let player = searchPlayer.replace(" ", "%20")
        setSearchPlayer("");
        fetch(url+`${player}`)
        .then(resp => resp.json())
        .then(data => {
            setSearchResults(data.player);
            setSearched(true);
        })
    }

    return (
        <Paper className="form">
            <form className="center" onSubmit={handleSearchSubmit}>
                <label className="heading" htmlFor="searchPlayer">Player Search</label>
                <br></br>
                <TextField type="text" name="searchPlayer" onChange={handleSearchChange} value={searchPlayer} variant="outlined" size="small"/>
                <br></br><br></br>
                <input type="submit" value="Search" class="btn"/>
            </form>
            <br></br>
            {searched !== true ? <p className="center subText">No Search Performed</p> : searchResults !== null ? <PlayerResults searchResults={searchResults}/> : <p className="center subText">No Results Found</p> }
        </Paper>
    )
}

export default PlayerForm;