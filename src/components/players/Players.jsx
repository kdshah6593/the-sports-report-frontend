import React, { useState } from 'react';
import Player from './Player';
import PlayerList from './PlayerList';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/fetchArticles';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
    
    return (
        <div className={classes.root} style={{ padding: 10 }}>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <h3>Player List</h3>
                        <Button variant="contained" color="primary"><Link to={"/add-player"} style={{ color: 'inherit', textDecoration: 'inherit'}}>Add Player</Link></Button>
                        <PlayerList players={props.players} SelectPlayer={SelectPlayer} />
                    </Paper>
                </Grid>
                <Grid item xs={10}>
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