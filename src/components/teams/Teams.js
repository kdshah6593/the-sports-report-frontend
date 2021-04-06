import React from 'react';
import Team from './Team';

class Teams extends React.Component {
    state = {
        selectedTeam: ""
    }

    selectTeam = (team) => {
        console.log("ive been clicked");
        this.setState({
            selectedTeam: team
        })
    }
    
    render() {
        console.log(this.props.teams)
        const teams = this.props.teams.map( (team, index) => <li key={index} onClick={() => this.selectTeam(team)}>{team.name}</li>);
        return (
            <div>
                <div>
                    <h4>Team List</h4>
                    <ul>
                        {teams}
                    </ul>
                </div>
                <div>
                    <h4>Team Details</h4>
                    {this.state.selectedTeam ? <Team key={this.state.selectedTeam.sportsDBId} team={this.state.selectedTeam} /> : <p>No Team Selected</p> }
                </div>
            </div>
        )
    }
}

export default Teams;