import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Player from '../components/players/Player';
import Players from '../components/players/Players';
import { connect } from 'react-redux';

class PlayersContainer extends React.Component {
    render() {
        return (
            <div>
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