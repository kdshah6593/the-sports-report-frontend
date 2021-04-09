import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';
import sportsPic from '../images/sports-magazine.png';
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BeenhereSharpIcon from '@material-ui/icons/BeenhereSharp';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(-3, 0, 3, 0),
      },
    },
  }));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 className="center textColor landingTitle">The Sports Report</h1>
            <div className={classes.root}>
                <ButtonGroup size="large">
                    <Button variant="contained" style={{ background: '#E09F3E', color: 'white'}}><Link to={`/login`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Login</Link></Button>
                    <Button variant="contained" style={{ background: '#E09F3E', color: 'white'}}><Link to={`/signup`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Signup</Link></Button>
                </ButtonGroup>
            </div>
            <br></br><br></br>
            <div className="landingContainer">
                <div>
                    <p className="textColor landingText"><span><BeenhereSharpIcon /></span> <em>Add Your Favorite Players and Teams</em></p>
                    <p className="textColor landingText"><span><BeenhereSharpIcon /></span> <em>No More Searching for Articles</em></p>
                    <p className="textColor landingText"><span><BeenhereSharpIcon /></span> <em>Articles Curated Toward Your Favorites</em></p>
                    <p className="textColor landingText"><span><BeenhereSharpIcon /></span> <em>Get the Latest Articles They Are Mentioned In</em></p>
                </div>
                <div>
                    <img class="imgSize" src={sportsPic} alt="" />
                </div>

            </div>
        </div>
    )
}

export default LandingPage;