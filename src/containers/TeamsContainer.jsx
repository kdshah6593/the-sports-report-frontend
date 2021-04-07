import React from 'react';
import Team from '../components/teams/Team';
import Teams from '../components/teams/Teams';
import { connect } from 'react-redux';

class TeamsContainer extends React.Component {
    render() {
        return (
            <div>
                <Teams teams={this.props.teams} />
            </div>
        )
    }
}

const mapDispatchToProps = state => {
    return {
        teams: state.user.attributes.teams
    }
}

export default connect(mapDispatchToProps)(TeamsContainer);