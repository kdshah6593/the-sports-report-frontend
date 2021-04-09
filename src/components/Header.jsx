import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AppBar, IconButton, Toolbar, Typography, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PeopleIcon from '@material-ui/icons/People';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Racing Sans One',
        fontSize: "28px"
    },
    headerColor: {
        background: "#E09F3E",
        color: "#335C67" ,
    }
}));

const menuStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

function Header(props) {
    const classes = useStyles();
    const menuClasses = menuStyles();
    const [state, setState] = React.useState({
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    }

    const handleClick = (event) => {
        if (event.target.innerText === "Logout") {
            props.logout();
        } else {
            //code useHistory to push to profile page
        }
    }

    const topList = [(<Link to={`/players`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Players</Link>), (<Link to={`/teams`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Teams</Link>)]

    const list = (anchor) => (
        <div
            className={clsx(menuClasses.list, {
                [menuClasses.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {topList.map((text, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>{index % 2 === 0 ? <DirectionsRunIcon /> : <PeopleIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["Profile", "Logout"].map((text, index) => (
                    <ListItem onClick={handleClick} button key={index}>
                        <ListItemIcon>{index % 2 === 0 ? <AccountCircleIcon /> : <ExitToAppIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <div className={classes.root}>
            <AppBar className={classes.headerColor} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        The Sports Report
                    </Typography>
                    <React.Fragment key="right">
                        <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer("right", true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)}>
                            {list("right")}
                        </Drawer>
                    </React.Fragment>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({ type: 'LOGOUT' })
    }
}

export default connect(null, mapDispatchToProps)(Header);