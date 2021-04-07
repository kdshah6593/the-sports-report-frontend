import React from 'react';
import PlayerResults from './PlayerResults'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import '../../Form.css';

class PlayerForm extends React.Component {
    state = {
        searchPlayer: "",
        searchResults: [],
        searched: false
    }

    handleSearchChange = (event) => {
        console.log(event.target.value)
        this.setState({
            searchPlayer: event.target.value
        })
    }
    
    handleSearchSubmit = (event) => {
        event.preventDefault()
        const url = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p="
        console.log("Form has been submitted")
        let player = this.state.searchPlayer.replace(" ", "%20")
        this.setState({
            searchPlayer: ""
        })
        fetch(url+`${player}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.player)
            this.setState({
                searchResults: data.player,
                searched: true
            })
        })

    }

    render() {
        return (
            <Paper className="form">
                <form className="center" onSubmit={this.handleSearchSubmit}>
                    <label className="heading" htmlFor="searchPlayer">Player Search</label>
                    <br></br>
                    <TextField type="text" name="searchPlayer" onChange={this.handleSearchChange} value={this.state.searchPlayer} variant="outlined" size="small"/>
                    <br></br><br></br>
                    <input type="submit" value="Search" />
                </form>
                <br></br>
                {this.state.searched === true ? <PlayerResults searchResults={this.state.searchResults}/> : <p className="center">No Search Performed</p>}
            </Paper>
        )
    }
}

export default PlayerForm;