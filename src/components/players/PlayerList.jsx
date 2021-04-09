import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItem, ListItemText, IconButton } from '@material-ui/core'
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const PlayerList = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");

  let history = useHistory()

  const handleListItemClick = (event, index, player) => {
    setSelectedIndex(index);
    props.SelectPlayer(player)
  };

  const handleDeleteClick = (event, player) => {
    console.log("im clicked")
    console.log(player)
    const dataToSend = {
      sportsDBId: player.sportsDBId
    }
    fetch(`http://localhost:3001/api/v1/players/${player.id}`, {
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
            props.deletePlayer(updatedUser.data)
            history.push("/players")
        })
  }

  const players = props.players.map((player, index) => (
      <ListItem button selected={selectedIndex === index} key={index}>
          <ListItemText primary={player.name} className="subText" onClick={(event) => handleListItemClick(event, index, player)} />
          <IconButton edge="end" onClick={(event) => handleDeleteClick(event, player)}>
              <DeleteIcon />
          </IconButton>
      </ListItem>
  ))

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {players}
      </List>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
      deletePlayer: userData => dispatch({type: 'DELETE_PLAYER', payload: userData })
  }
}

export default connect(null, mapDispatchToProps)(PlayerList);