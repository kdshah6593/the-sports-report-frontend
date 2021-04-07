import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Team from '../components/teams/Team';
import Teams from '../components/teams/Teams';
import { connect } from 'react-redux';

class TeamsContainer extends React.Component {
    render() {
        return (
            <div>
                <Link to={"/add-team"}>Add Team</Link>
                <Teams teams={this.props.teams} />
                <Switch>
                    <Route path="/teams/:id" component={Team} />
                </Switch>
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