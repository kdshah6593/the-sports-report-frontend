import React, { useState } from 'react';
import Player from './Player';
import PlayerList from './PlayerList';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/fetchArticles';
import { Link } from 'react-router-dom';
import '../../Styles.css';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button } from '@material-ui/core';

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
                        <h2 className="textColor">Your Favorite Players</h2>
                        <Button variant="contained" style={{ background: '#E09F3E', color: 'white'}}><Link to={"/add-player"} style={{ color: 'inherit', textDecoration: 'inherit'}}>Add Player</Link></Button>
                        <PlayerList players={props.players} SelectPlayer={SelectPlayer} />
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        <h2 className="textColor">{selectedPlayer.name} News Articles</h2>
                        {selectedPlayer ? <Player key={selectedPlayer.sportsDBId} player={selectedPlayer} /> : <h3 className="subText">No Player Selected</h3> }
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