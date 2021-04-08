import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItem, ListItemText, IconButton } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PlayerList(props) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");

  const handleListItemClick = (event, index, player) => {
    setSelectedIndex(index);
    props.SelectPlayer(player)
  };

  const players = props.players.map((player, index) => (
      <ListItem button selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index, player)} key={index}>
          <ListItemText primary={player.name} />
          <IconButton edge="end">
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