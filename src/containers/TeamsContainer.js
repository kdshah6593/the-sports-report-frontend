import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Team from '../components/teams/Team';
import Teams from '../components/teams/Teams';
import { connect } from 'react-redux';

class TeamsContainer extends React.Component {
    render() {
        return (
            <div>
                This is the team container
                It will load up all the current favorite teams of the user as links on left hand side.
                - this is done via Teams Component, which will map over players and create each one as a link
                - Team Component will be display of articles as cards
                Then if a link is clicked, the detail (articles) will show up on right hand side via route
                <Teams />
                <Switch>
                    <Route path="/teams/:id" component={Team} />
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = state => {
    return {
        players: state.user.attributes.teams
    }
}

export default connect(mapDispatchToProps)(TeamsContainer);