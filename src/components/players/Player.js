import React from 'react';

class Player extends React.Component {
    state = {
        name: this.props.player.name
    }
    
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default Player;


// this component should display the articles for the player that is passed through props and use async fetch request