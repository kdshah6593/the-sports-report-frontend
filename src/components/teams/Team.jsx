import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card';
import { Container, Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
      },
  }));

const Team = (props) => {
    const classes = useStyles();

    const articles = props.articles.map(article => (
        <Grid item key={article.id} xs={12} sm={6} md={4}>
            <Card title={article.title} image={article.image} description={article.description} url={article.url} />
        </Grid>
    ))
    
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={3} className={classes.loading}>
                {props.requesting ? <div><h3 className="subText">Loading...</h3><CircularProgress style={{ color: '#E09F3E'}}/></div> : articles}
            </Grid>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        articles : state.articles,
        requesting: state.requesting
    }
}

export default connect(mapStateToProps)(Team);