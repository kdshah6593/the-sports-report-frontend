import React from 'react';

class PlayerForm extends React.Component {
    state = {
        searchPlayer: "",
        searchResults: []
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
        fetch(url+`${player}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.player)
            this.setState({
                searchResults: data.player
            })
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSearchSubmit}>
                    <label htmlFor="searchPlayer">Search for the Player: </label>
                    <input type="text" name="searchPlayer" onChange={this.handleSearchChange} value={this.state.searchPlayer} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default PlayerForm;