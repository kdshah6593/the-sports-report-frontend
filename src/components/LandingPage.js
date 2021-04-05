import React from 'react';
import PlayerForm from './players/PlayerForm';
import TeamForm from './teams/TeamForm'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                This is the landing page.
                <PlayerForm />
                <TeamForm />
            </div>
        )
    }
}

export default LandingPage;