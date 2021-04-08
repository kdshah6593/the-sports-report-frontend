import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PeopleIcon from '@material-ui/icons/People';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
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