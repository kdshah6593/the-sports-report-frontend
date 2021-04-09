import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import '../Styles.css';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';


function Copyright() {
  return (
    <Typography variant="body2" style={{ color: '#E09F3E' }} align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/kdshah6593">
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  })

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }

  const signupFetch = (event) => {
    event.preventDefault()
    console.log("I'm signing up")
    const inputData = {user: {
      username: values.username,
      password: values.password,
      email: values.email,
      first_name: values.firstName,
      last_name: values.lastName
    }}
    fetch("http://localhost:3001/api/v1/users", {
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
            Sign up
          </Typography>
          <form onSubmit={signupFetch} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange = {handleChange}
                  value = {values.firstName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange = {handleChange}
                  value = {values.lastName}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange = {handleChange}
                  value = {values.email}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  onChange = {handleChange}
                  value = {values.username}
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange = {handleChange}
                  value = {values.password}
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ background: '#E09F3E', color: 'white'}}
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <RouteLink to={`/login`} variant="body2">
                  Already have an account? Sign in
                </RouteLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
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

export default connect(null, mapDispatchToProps)(SignUp)



// OLD CODE FOR STATE AND HANDLING CHANGE
// const [firstName, setFirstName] = useState("")
// const [lastName, setLastName] = useState("")
// const [email, setEmail] = useState("")
// const [username, setUsername] = useState("")
// const [password, setPassword] = useState("")

// const handleUsername = (event) => {
//   setUsername(event.target.value)
// }
// const handlePassword = (event) => {
//   setPassword(event.target.value)
// }
// const handleFirstName = (event) => {
//   setFirstName(event.target.value)
// }
// const handleLastName = (event) => {
//   setLastName(event.target.value)
// }
// const handleEmail = (event) => {
//   setEmail(event.target.value)
// }