import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
  }));

const Player = (props) => {
    const classes = useStyles();

    const articles = props.articles.map(article => (
        <Grid item key={article.id} xs={12} sm={6} md={4}>
            <Card title={article.title} image={article.image} description={article.description} url={article.url} />
        </Grid>
    ))
    
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={3}>
                {props.requesting ? "Loading" : articles}
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

export default connect(mapStateToProps)(Player);