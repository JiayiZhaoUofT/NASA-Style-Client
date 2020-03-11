import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 200
  }
});

export default function NASACard(props) {
  return (
    <Card className={useStyles.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="nasa"
          height="140px"
          width="200px"
          image={props.url}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          copyright: {props.copyright}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.explanation}
        </Typography>
      </CardContent>
    </Card>
  );
}
