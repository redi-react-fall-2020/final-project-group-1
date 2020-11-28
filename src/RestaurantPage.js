import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, useMediaQuery } from "@material-ui/core";
/* import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase"; */
import pizza from "./img/pizza.jpg";
import foodies from "./img/foodies.png";
/* import useMediaQuery from "./useMediaQuery"; */
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  pizzaImg: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    /* gridTemplateRows: "67.625rem", */
    gap: "0px 0px",
    padding: "25vh 0",
    width: "95vw",
    maxWidth: "1500px",
    /* height: '60vh', */
    margin: "0 auto",
  },
  grid1: {
    display: "grid",
    /* gridTemplateColumns: "1fr", */
    gridTemplateRows: "30% 70%",
    gap: "0px 0px",
  },
  grid2: {
    width: "100%",
    background: "cover center",
  },
  innerGrid1: {
    fontFamily: "trattatello",
    position: "relative",
    fontSize: "5vw",
    color: "#FFBC5C",
    padding: "10% 0 0 15%",
  },
  innerGrid2: {
    fontSize: "5vw",
    padding: "0 10% 0 15%",
  },
  restaurantLogo: {
    left: "15%",
    position: "relative",
    backgroundRepeat: "no-repeat",
    position: "relative",
    top: "30%",
    width: "24%",
  },
  h1: {
    fontSize: "2vw",
    color: "#38415C",
  },
  h2: {
    fontSize: "2vw",
    fontWeight: "normal",
    color: "#38415C",
  },
  p: {
    fontSize: "1.5vw",
    fontWeight: "normal",
    color: "#38415C",
  },
  chip: {
    margin: "0 0.2rem",
    minWidth: "2rem",
    maxWidth: "14vw",
    minHeight: "2.5vh",
    maxHeight: "6vh",
    fontSize: "2vw",
    color: "white",
    background: "#FFBC5C",
  },
  chipMax600Px: {
    margin: "0.2rem 0.2rem",
    minWidth: "2rem",
    maxWidth: "14vw",
    /* minHeight: "0", */
    height: "2.5vh",
    maxHeight: "6vh",
    minHeight: "4vh",
    fontSize: "2vw",
    color: "white",
      background: "#FFBC5C",
    display: 'grid',
  },
}));

const RestaurantPage = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <div className={classes.gridContainer}>
      <div className={classes.grid1}>
        <div className={classes.innerGrid1}>
          {/* <img src={foodies} className={classes.restaurantLogo}></img> */}
          Foodies
        </div>
        <div className={classes.innerGrid2}>
          <div>
            <h1 className={classes.h1}>Restaurant Name</h1>
            <h2 className={classes.h2}>Restaurant Address</h2>
            <p className={classes.p}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown
            </p>

            <div>
              {matches ? (
                <div>
                  <Chip label="Open" className={classes.chip} />
                  <Chip label="Vegan" className={classes.chip} />
                  <Chip label="Delivery" className={classes.chip} />
                </div>
              ) : (
                <div>
                  <Chip label="Open" className={classes.chipMax600Px} />
                  <Chip label="Vegan" className={classes.chipMax600Px} />
                  <Chip label="Delivery" className={classes.chipMax600Px} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.grid2}>
        <img src={pizza} alt="pizza" className={classes.pizzaImg}></img>
      </div>
      {/* <div>{matches ? "Hello" : "World"}</div> */}
    </div>
  );
};
export { RestaurantPage };
