import React from 'react';

class Teams extends React.Component {
    render() {
        const teams = this.props.teams.map( (team, index) => <li key={index}>{team.name}</li>);
        return (
            <div>
                {teams}
            </div>
        )
    }
}

export default Teams;