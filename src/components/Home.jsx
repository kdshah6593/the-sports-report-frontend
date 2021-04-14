import React from 'react';
import { useHistory } from 'react-router';
import '../Styles.css';
import tennisPlayer from '../images/tennis-player.jpg';
import soccerTeam from '../images/soccer-team.jpg';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Counter from './Counter'

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
        cursor: "pointer",
    }
}))

const Home = () => {
    const classes = useStyles();
    let history = useHistory()

    const handleClick = (event) => {
        if (event.target.innerText === "PLAYERS") {
            history.push("/players");
        } else if (event.target.innerText === "TEAMS") {
            history.push("/teams");
        }
    }

    return (
        <div className="homeContainer">
            <div className="center textColor">
                <h2>Select an Option To Get Started</h2>
                {/* <Counter /> */}
            </div>
            <div className={classes.paperRoot}>
                <Paper elevation={3} className={classes.paper} style={{ backgroundImage: `url(${tennisPlayer})` }} onClick={handleClick}>
                    <div className={classes.root} style={{ position: "absolute", bottom: "0", width: "100%" }}>
                        <Button style={{ background: '#E09F3E', color: 'white'}}>Players</Button>
                    </div>
                </Paper>
                <Paper elevation={3} className={classes.paper} style={{ backgroundImage: `url(${soccerTeam})` }} onClick={handleClick}>
                    <div className={classes.root} style={{ position: "absolute", bottom: "0", width: "100%" }}>
                        <Button variant="contained" style={{ background: '#E09F3E', color: 'white'}}>Teams</Button>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default Home;