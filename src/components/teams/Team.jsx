import React from 'react';

class Team extends React.Component {
    state = {
        name: this.props.team.name
    }
    
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default Team;