import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List, ListItem, ListItemText, Divider, Badge } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(0),
        width: theme.spacing(60),
        height: theme.spacing(60),
      },
    },
    listRoot: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    listItem: {
        flexGrow: 1,
        flexDirection: 'column',
        textAlign: 'center',
        width: '100%',
        '& > *': {
            height: theme.spacing(4),
        }
    },
  }));

const Profile = (props) => {
    const classes = useStyles();
    
    return (
        <>
            <h1 className="center textColor landingTitle">Profile</h1>
            <div className={classes.root}>
                <Paper elevation={3}>
                    <List component="nav" className={classes.listRoot}>
                        <ListItem className={classes.listItem}>
                            <ListItemText primary="First Name" style={{ color: "#E09F3E"}} />
                            <ListItemText primary={props.user.first_name} style={{ color: "#000" }} />
                        </ListItem>
                        <Divider className={classes.divider} />
                        <ListItem className={classes.listItem}>
                            <ListItemText primary="Last Name" style={{ color: "#E09F3E"}}/>
                            <ListItemText primary={props.user.last_name} style={{ color: "#000" }} />
                        </ListItem>
                        <Divider />
                        <ListItem className={classes.listItem}>
                            <ListItemText primary="Username" style={{ color: "#E09F3E"}} />
                            <ListItemText primary={props.user.username} style={{ color: "#000" }} />
                        </ListItem>
                        <Divider />
                        <ListItem className={classes.listItem}>
                            <ListItemText primary="Email" style={{ color: "#E09F3E"}} />
                            <ListItemText primary={props.user.email} style={{ color: "#000" }} />
                        </ListItem>
                        <Divider />
                        <ListItem className={classes.listItem}>
                            <ListItemText primary="Number of Favorite Players" style={{ color: "#E09F3E"}} />
                            <Badge badgeContent={props.user.players.length} color="secondary">
                                <DirectionsRunIcon />
                            </Badge>
                        </ListItem>
                        <Divider />
                        <ListItem className={classes.listItem}>
                            <ListItemText primary="Number of Favorite Teams" style={{ color: "#E09F3E"}} />
                            <Badge badgeContent={props.user.teams.length} color="secondary">
                                <PeopleIcon />
                            </Badge>
                        </ListItem>
                    </List>
                </Paper>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.attributes
    }
}

export default connect(mapStateToProps)(Profile);