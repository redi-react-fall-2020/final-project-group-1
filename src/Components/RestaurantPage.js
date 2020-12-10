import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, useMediaQuery } from "@material-ui/core";
import { Map } from "./Map"
import Nav from "./Nav"
import Footer from "./Footer"

const useStyles = makeStyles((theme) => ({
  grid:{
    width:"90%",
    display:"grid",
    gridTemplateColumns:"45% 45%",
    gap:"10%",
    margin:"auto"
  },
  restaurantTitle:{
    marginTop: "10rem",
    color: "#38415C",
  },
  restaurantInfo: {
    color: "#38415C",
    fontWeight:"500"
  },
  chip:{
    background: "#FFBC5C",
    minWidth: "6rem",
    margin: "0.7rem 0.28rem",
  },
  map:{
    width: "90%",
    margin:"auto"
  },
  mapHeader:{
    color: "#38415C",
  },
  restaurantImage:{
    borderRadius: "2.25rem 0px",
  }
}));


const RestaurantPage = ({ address, image, name, phone, email, isOpen, delivery, pickup, lat, lng }) => {

  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <>
      <Nav />

      <div className={classes.grid}>
        <div>
        <div>
          <h1 className={classes.restaurantTitle}>{name} </h1>
  <h2 className={classes.restaurantInfo}>Address: {address}</h2>
  <h2 className={classes.restaurantInfo}>Tel: {phone}</h2>
  <h2 className={classes.restaurantInfo}>Email: {email}</h2>
        </div>
        <div>
          {isOpen && <Chip label="Open" className={classes.chip} />}
          {!isOpen && <Chip label="Closed" className={classes.chip} />}
          {delivery && <Chip label="Delivery" className={classes.chip} />}
          {pickup && <Chip label="Pickup" className={classes.chip} />}
        </div>
        </div>
        <div>
          <img className={classes.restaurantImage} src={image} />
        </div>
      </div>
      <div className={classes.map}>
        <h1 className={classes.mapHeader}>Locate this Restaurant now</h1>
      <Map  isMarkerShown lat={lat} lng={lng} />
      </div>
      <Footer />
    
    </>
  );
};
export default RestaurantPage;
