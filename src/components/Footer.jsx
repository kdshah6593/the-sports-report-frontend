import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/kdshah6593/the-sports-report-frontend">
          Kunal Shah
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: '#E09F3E',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '4.5rem',
    },
    phantom: {
        height: '10vh',
    }
}))

export default function Footer() {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
            <div className={classes.phantom}></div>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">My sticky footer can be found here.</Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    )
}