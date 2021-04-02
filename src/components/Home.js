import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import PlayersContainer from '../containers/PlayersContainer';
import TeamsContainer from '../containers/TeamsContainer';

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
    let match = useRouteMatch();
    const classes = useStyles();

    return (
        <div>
            Home Page for Player and Team Container
            <div className={classes.root}>
                <Button variant="contained" color="primary"><Link to={`${match.url}/players`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Players</Link></Button>
                <Button variant="contained" color="primary"><Link to={`${match.url}/teams`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Teams</Link></Button>
            </div>

            <Switch>
                <Route path={`${match.path}/players`}>
                    <PlayersContainer />
                </Route>
                <Route path={`${match.path}/teams`}>
                    <TeamsContainer />
                </Route>
            </Switch>



        </div>
    )
}