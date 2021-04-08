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

export default function TeamList(props) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");

  const handleListItemClick = (event, index, team) => {
    setSelectedIndex(index);
    props.SelectTeam(team)
  };

  const teams = props.teams.map((team, index) => (
      <ListItem button selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index, team)} key={index}>
          <ListItemText primary={team.name} className="subText" />
          <IconButton edge="end">
              <DeleteIcon />
          </IconButton>
      </ListItem>
  ))

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {teams}
      </List>
    </div>
  );
}