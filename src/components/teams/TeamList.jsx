import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItem, ListItemText, IconButton, Divider } from '@material-ui/core'
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { urlDomain } from '../../actions/urlDomain';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TeamList = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");

  let history = useHistory()

  const handleListItemClick = (event, index, team) => {
    setSelectedIndex(index);
    props.SelectTeam(team)
  };

  const handleDeleteClick = (event, team) => {
    const r = window.confirm("Are you sure you want to delete this team?")
    if ( r !== true ) {
      history.replace("/teams")
    } else {
      const dataToSend = {
        sportsDBId: team.sportsDBId
      }
      fetch(urlDomain() + `/api/v1/teams/${team.id}`, {
              method: 'DELETE',
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
              },
              body: JSON.stringify(dataToSend)
          })
          .then(response => response.json())
          .then(updatedUser => {
              console.log(updatedUser)
              props.deleteTeam(updatedUser.data)
              history.push("/teams")
          })
    }
  }

  const teams = props.teams.map((team, index) => (
      <>
        <ListItem button selected={selectedIndex === index} key={index}>
            <ListItemText primary={team.name} className="subText" onClick={(event) => handleListItemClick(event, index, team)} />
            <IconButton edge="end" onClick={(event) => handleDeleteClick(event, team)}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
        <Divider />
      </>
  ))

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {teams}
      </List>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
      deleteTeam: userData => dispatch({type: 'DELETE_TEAM', payload: userData })
  }
}

export default connect(null, mapDispatchToProps)(TeamList);