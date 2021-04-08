import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom'
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: '#E09F3E' }} align="center">
      {'Copyright © '}
      <Link color="inherit" to="https://github.com/kdshah6593">
        Kunal Shah
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: "white",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#E09F3E',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  let history = useHistory()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const loginFetch = (event) => {
    event.preventDefault()
    console.log("I'm logging in")
    const inputData = {user: {
      username: username,
      password: password
    }}
    fetch("http://localhost:3001/api/v1/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(inputData)
    })
    .then(response => response.json())
    .then(json => {
      localStorage.setItem('jwt_token', json.jwt)
      const userId = json.user.data.id
      localStorage.setItem('currentUser', userId)
      props.addUser(json.user.data)
      history.push("/home")
    })
  }

  return (
    <>
      <h1 className="center textColor landingTitle">The Sports Report</h1>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{color: '#E09F3E'}}>
            Log in
          </Typography>
          <form onSubmit={loginFetch} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange = {handleUsername}
              value = {username}
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange = {handlePassword}
              value = {password}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ background: '#E09F3E', color: 'white'}}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <RouteLink to={`/signup`} variant="body2">
                  {"Don't have an account? Sign Up"}
                </RouteLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => dispatch({ type: 'ADD_USER', payload: user })
  }
}

export default connect(null, mapDispatchToProps)(SignIn)