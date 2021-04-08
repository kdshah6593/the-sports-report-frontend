import React from 'react';
import { Link } from "react-router-dom";
import '../Styles.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))


/* This page should render a blank looking version of the player or team container. 
It should have 2 buttons that are links to go to player or team container.
Then if either of those links are clicked, the page will re-render with that container*/

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <p>Home Page for Player and Team Container</p>
            <p>Select an Option To Get Started</p>
            <div className={classes.root}>
                <Button variant="contained" color="primary"><Link to={`/players`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Players</Link></Button>
                <Button variant="contained" color="primary"><Link to={`/teams`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Teams</Link></Button>
            </div>
        </div>
    )
}