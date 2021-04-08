import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import '../Styles.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 className="center textColor">The Sports Report</h1>
            <div className={classes.root}>
                <ButtonGroup>
                    <Button variant="contained" style={{ background: '#E09F3E', color: 'white'}}><Link to={`/login`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Login</Link></Button>
                    <Button variant="contained" style={{ background: '#E09F3E', color: 'white'}}><Link to={`/signup`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Signup</Link></Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default LandingPage;