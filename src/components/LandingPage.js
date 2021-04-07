import React from 'react';
import PlayerForm from './players/PlayerForm';
import TeamForm from './teams/TeamForm'
import { Link } from 'react-router-dom'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <p>This is the landing page.</p>
                <div>
                    <Link to={`/login`}>Login</Link>
                </div>
                <div>
                    <Link to={`/signup`}>Signup</Link>
                </div>
            </div>
        )
    }
}

export default LandingPage;