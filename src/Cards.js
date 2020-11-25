import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import kuruFasulye from "./img/kuruFasulye.jpg";

import Chip from "@material-ui/core/Chip";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "21.56rem",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 0.163 0.375rem #5D5D5D4B",
    borderRadius: "2.25rem 0px",
  },
  media: {
    borderRadius: "2.25rem 0px 0px 0px;",
    height: "13.56rem",
    width: "100%",
    background: "cover center",

    // maxWidth: "29.56rem",
    /* objectFit: "cover", */
  },
  restaurantName: {
    textAlign: "left",
    font: "bold 2.125rem roboto",
  },
  restaurantAddress: {
    textAlign: "left",
    font: "300 2.125rem roboto",
  },
  chip: {
    background: "#FFBC5C",
    minWidth: "4rem",
    margin: "0 0.28rem",
    /* "&:last-child": {
      background: "orange",
    }, */
  },
  restaurantMoreInfo: {
    textAlign: "left",
    font: "normal 300 26px/34px Roboto",
    letterSpacing: "0px",
    color: "#81C2F6",
    textTransform: "capitalize",
  },
}));

const Cards = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.restaurantImage}
          className={classes.media}
          image={kuruFasulye}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.restaurantName}
          >
            Restaurant Name
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            variant="h5"
            component="h2"
            className={classes.restaurantAddress}
          >
            Restaurant Address
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.chipContiner}>
        <Chip label="Open" className={classes.chip} />
        <Chip label="Vegan" className={classes.chip} />
        <Chip label="Delivery" className={classes.chip} />
      </div>
      <CardActions>
        <Button
          className={classes.restaurantMoreInfo}
          size="small"
          color="primary"
        >
          More
        </Button>
      </CardActions>
    </Card>
  );
};
export { Cards };
