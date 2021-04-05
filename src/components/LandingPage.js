import React from 'react';
import PlayerForm from './players/PlayerForm';

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                This is the landing page.
                <PlayerForm />
            </div>
        )
    }
}

export default LandingPage;