import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Player from '../components/players/Player';
import Players from '../components/players/Players';
import { connect } from 'react-redux';

class PlayersContainer extends React.Component {
    render() {
        return (
            <div>
                <p>
                This is the player container.
                It will load up all the current favorite players of the user as links on left hand side.
                - this is done via Players Component, which will map over players and create each one as a link
                - Player Component will be display of articles as cards
                Then if a link is clicked, the detail (articles) will show up on right hand side via route
                </p>
                <Link to={"/add-player"}>Add Player</Link>
                <Players players={this.props.players} />
                <Switch>
                    <Route path="/players/:id" component={Player} />
                </Switch>
            </div>
        )
    }
}
const mapDispatchToProps = state => {
    return {
        players: state.user.attributes.players
    }
}

export default connect(mapDispatchToProps)(PlayersContainer);