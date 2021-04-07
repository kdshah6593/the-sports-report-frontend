import React, { useState } from 'react';
import Player from './Player';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/fetchArticles';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Players = (props) => {
    const classes = useStyles();
    
    const [selectedPlayer, useSelectedPlayer] = useState("")
    
    const SelectPlayer = (player) => {
        useSelectedPlayer(player)
        props.fetchArticles(player)
    }

    const players = props.players.map( (player, index) => <li key={index} onClick={() => SelectPlayer(player)}>{player.name}</li>);
    
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <h3>Player List</h3>
                        <ul>
                            {players}
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <h3>Player Details</h3>
                        {selectedPlayer ? <Player key={selectedPlayer.sportsDBId} player={selectedPlayer} /> : <p>No Player Selected</p> }
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: (player) => dispatch(fetchArticles(player))
    }
}

export default connect(null, mapDispatchToProps)(Players);