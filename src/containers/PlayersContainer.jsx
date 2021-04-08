import React from 'react';
import Players from '../components/players/Players';
import { connect } from 'react-redux';

const PlayersContainer = (props) => {
    return (
        <div>
            <Players players={props.players} />
        </div>
    )
}

const mapDispatchToProps = state => {
    return {
        players: state.user.attributes.players
    }
}

export default connect(mapDispatchToProps)(PlayersContainer);