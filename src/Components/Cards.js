import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "21.56rem",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 0.163 0.375rem #5D5D5D4B",
    borderRadius: "2.25rem 0px",
    margin: "auto",
    paddingBottom:"2rem",
    textAlign:"center"    
  },
  media: {
    borderRadius: "2.25rem 0px 0px 0px;",
    height: "13.56rem",
    width: "100%",
    background: "cover center",
  },
  restaurantName: {
    textAlign: "left",
    font: "bold 1.7rem roboto",
  },
  restaurantAddress: {
    textAlign: "left",
    font: "300 1.5rem roboto",
  },
  chip: {
    background: "#FFBC5C",
    minWidth: "4rem",
    margin: "0 0.28rem",
  },
  restaurantMoreInfo: {
    textAlign: "left",
    font: "normal 300 1.2rem Roboto",
    letterSpacing: "0px",
    color: "#81C2F6",
    textTransform: "capitalize",
  },
}));

const Cards = ({image, name, address, isOpen, delivery, pickup}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.restaurantName}
          >
            {name}
          </Typography>
          <Typography
      
            color="textSecondary"
            variant="h5"
            component="h2"
            className={classes.restaurantAddress}
          >
            {address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.chipContiner}>
       {isOpen && <Chip label="Open" className={classes.chip} />}
       {!isOpen && <Chip label="Closed" className={classes.chip} />}
       {delivery && <Chip label="Delivery" className={classes.chip} />}
       {pickup && <Chip label="Pickup" className={classes.chip} />}
      </div>
    </Card>
  );
};
export { Cards };
