import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <h1>The Sports Report</h1>
                <div>
                    <Button variant="contained" color="primary"><Link to={`/login`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Login</Link></Button>
                </div>
                <br></br>
                <div>
                    <Button variant="contained" color="primary"><Link to={`/signup`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Signup</Link></Button>
                </div>
            </div>
        )
    }
}

export default LandingPage;