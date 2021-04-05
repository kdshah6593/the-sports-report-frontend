import React from 'react';
import PlayerForm from './players/PlayerForm';
import TeamForm from './teams/TeamForm'
import { Link } from 'react-router-dom'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <p>This is the landing page.</p>
                <Link to={`/login`}>Login</Link>
                <Link to={`/signup`}>Signup</Link>
                <PlayerForm />
                <TeamForm />
            </div>
        )
    }
}

export default LandingPage;