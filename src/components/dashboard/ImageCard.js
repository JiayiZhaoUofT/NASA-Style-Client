import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

export default function ImageCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="nasa"
          height="100%"
          width="100%"
          image={props.url}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom component="h2">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
