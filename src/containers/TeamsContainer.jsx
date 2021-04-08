import React from 'react';
import Teams from '../components/teams/Teams';
import { connect } from 'react-redux';

const TeamsContainer = (props) => {
    return (
        <div>
            <Teams teams={props.teams} />
        </div>
    )
}

const mapDispatchToProps = state => {
    return {
        teams: state.user.attributes.teams
    }
}

export default connect(mapDispatchToProps)(TeamsContainer);