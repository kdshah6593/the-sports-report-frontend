import React from 'react';
import { CssBaseline, Typography, Container, Link } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        {new Date().getFullYear()}
        {' '}
        {'MIT Licensed:'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(2, 2),
        marginTop: 'auto',
        backgroundColor: '#E09F3E',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '4.5rem',
        textAlign: 'center',
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
                <Container maxWidth="false">
                    <Copyright />
                    <Typography variant="body1"><Link color="inherit" href="https://github.com/kdshah6593/the-sports-report-frontend">The Sports Report</Link> - <Link color="inherit" href="https://github.com/kdshah6593">Kunal Shah</Link></Typography>
                </Container>
            </footer>
        </div>
    )
}
