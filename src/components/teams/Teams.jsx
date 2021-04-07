import React, { useState } from 'react';
import Team from './Team';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/fetchArticles'

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

const Teams = (props) => {
    const classes = useStyles();

    const [selectedTeam, useSelectedTeam] = useState("")

    const SelectTeam = (team) => {
        useSelectedTeam(team)
        this.props.fetchArticles(team)
    }
    
    const teams = props.teams.map( (team, index) => <li key={index} onClick={() => SelectTeam(team)}>{team.name}</li>);
    
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <h3>Team List</h3>
                        <ul>
                            {teams}
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <h3>Team Details</h3>
                        {selectedTeam ? <Team key={selectedTeam.sportsDBId} team={selectedTeam} /> : <p>No Team Selected</p> }
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