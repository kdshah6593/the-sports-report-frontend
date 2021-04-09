import React from 'react';
import { Link } from "react-router-dom";
import '../Styles.css';
import tennisPlayer from '../images/tennis-player.jpg';
import soccerTeam from '../images/soccer-team.jpg';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paperRoot: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },
    },
    paper: {
        height: '65vh',
        width: '50vh',
        marginTop: '5vh',
        backgroundSize:"50vh 65vh",
        position: "relative",
    }
}))

const Home = () => {
    const classes = useStyles();

    return (
        <div className="homeContainer">
            <div className="center textColor">
                <h2>Select an Option To Get Started</h2>
            </div>
            <div className={classes.paperRoot}>
                <Paper elevation={3} className={classes.paper} style={{ backgroundImage: `url(${tennisPlayer})`}} >
                    <div className={classes.root} style={{ position: "absolute", bottom: "0", width: "50%", marginLeft: '25%' }}>
                        <Button variant="contained" style={{ background: '#E09F3E', color: 'white'}}><Link to={`/players`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Players</Link></Button>
                    </div>
                </Paper>
                <Paper elevation={3} className={classes.paper} style={{ backgroundImage: `url(${soccerTeam})`}}>
                    <div className={classes.root} style={{ position: "absolute", bottom: "0", width: "50%", marginLeft: '25%' }}>
                        <Button variant="contained" style={{ background: '#E09F3E', color: 'white'}}><Link to={`/teams`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Teams</Link></Button>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default Home;