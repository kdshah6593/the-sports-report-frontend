import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Link } from '@material-ui/core';
import noImage from '../images/no-image-placeholder.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 140,
    paddingTop: '56.25%', // 16:9
  },
});

const MediaCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image !== "None" ? props.image : noImage}
          title=""
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link color="inherit" href={props.url} target="_blank" rel="noopener noreferrer">Read the Full Article</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;