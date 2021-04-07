import React from 'react';
import Player from '../components/players/Player';
import Players from '../components/players/Players';
import { connect } from 'react-redux';

class PlayersContainer extends React.Component {
    render() {
        return (
            <div>
                <Players players={this.props.players} />
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