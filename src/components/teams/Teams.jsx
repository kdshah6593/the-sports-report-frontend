import React, { useState } from 'react';
import Team from './Team';
import TeamList from './TeamList';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/fetchArticles'
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

const Teams = (props) => {
    const classes = useStyles();

    const [selectedTeam, useSelectedTeam] = useState("")

    const SelectTeam = (team) => {
        useSelectedTeam(team)
        props.fetchArticles(team)
    }
    
    return (
        <div className={classes.root} style={{ padding: 10 }}>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <h2>Your Favorite Teams</h2>
                        <Button variant="contained" color="primary"><Link to={"/add-team"} style={{ color: 'inherit', textDecoration: 'inherit'}}>Add Team</Link></Button>
                        <TeamList teams={props.teams} SelectTeam={SelectTeam} />
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        <h2>{selectedTeam.name} News Articles</h2>
                        {selectedTeam ? <Team key={selectedTeam.sportsDBId} team={selectedTeam} /> : <h3>No Team Selected</h3> }
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: (team) => dispatch(fetchArticles(team))
    }
}

export default connect(null, mapDispatchToProps)(Teams);