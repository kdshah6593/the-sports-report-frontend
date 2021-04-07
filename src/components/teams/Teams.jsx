import React from 'react';
import Team from './Team';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/fetchArticles'

class Teams extends React.Component {
    state = {
        selectedTeam: ""
    }

    selectTeam = (team) => {
        console.log("ive been clicked");
        this.setState({
            selectedTeam: team
        })
        this.props.fetchArticles(team)
    }
    
    render() {
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

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: (team) => dispatch(fetchArticles(team))
    }
}

export default connect(null, mapDispatchToProps)(Teams);