import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./App.css";
import {Map} from "./Map"
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

  gridContainer: {
    width: "100%",
    minHeight: "37rem",
    maxHeight: "100rem",
    /* height: "100vh", */

    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr));",
    gap: "1em",
    padding: "0 0.4em 0 .4em",
    margin: "0 auto",
    boxSizing: "border-box",
    alignContent: "start",
    justifyItems: "center",

    "& > *": {
      boxSizing: "border-box",
    },
  },
  grid1: {
    height: "100%",
    display: "grid",
    gridTemplateRows: "16% 75%",
    gap: "0px 0px",
    gridAutoFlow: "column",
    alignContent: "center",
  },
  grid2: {
    height: "100%",
    display: "grid",
    alignItems: "center",
    width: "100%",
    background: "cover center",
  },
  innerGrid1: {
    fontFamily: "Niconne",
    position: "relative",
    alignSelf: "center",
    color: "#FFBC5C",
    padding: "0 0 0 15%",
  },
  innerGrid2: {
    /* fontSize: "5vw", */
    display: "grid",
    alignContent: "center",
    padding: "0 0 0 15%",
  },
  restaurantLogo: {
    fontSize: "9vw",
  },
  h1: {
    fontSize: "4vh",
    color: "#38415C",
  },
  h2: {
    fontSize: "2.9vh",
    fontWeight: "normal",
    color: "#38415C",
  },
  p: {
    fontSize: "2.9vh",
    fontWeight: "normal",
    color: "#38415C",
  },
  chip: {
    margin: "0.2em 0.2rem",
    minWidth: "2rem",
    maxWidth: "24vw",
    minHeight: "2.5vh",
    maxHeight: "6vh",
    fontSize: "1em",
    color: "white",
    background: "#FFBC5C",

    "& span": {
      overflow: "visible",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  },
  pizzaImg: {
    width: "100%",
    /* height: "81%", */
    margin: "auto",
    display: "block",
    backgroundSize: "cover",
  },

  //-------------Max 600px -------------//
  /* h1Max600Px: {
    fontSize: "6vw",
    margin: "1vh 0",
    color: "#38415C",
  },
  pMax600Px: {
    fontSize: "4vw",
    fontWeight: "normal",
    color: "#38415C",
    margin: "1vh 0",
  },
  h2Max600Px: {
    fontSize: "6vw",
    fontWeight: "normal",
    color: "#38415C",
    margin: "1vh 0",
  },
  gridContainerMax600Px: {
    display: "grid",
    width: "95vw",
    margin: "0 auto",
  },
  grid1Max600Px: {
    display: "grid", */
  /* gridTemplateColumns: "1fr", */
  /* gridTemplateRows: "15% 85%",
    gap: "0px 0px",
    padding: "0 2%",
  },
  grid2Max600Px: {
    padding: "0 2%",
  },
  innerGrid1Max600Px: {
    fontFamily: "Niconne",

    color: "#FFBC5C",
    padding: "1% 15%",
  },
  innerGrid2Max600Px: {
    fontSize: "5vw",
  },
  ChipContainerMax600Px: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto auto auto",
    gridTemplateRows: "auto auto",
    gridAutoFlow: "dense",
    "& div": {
      padding: "1px 1px 1px 1px",
      marginBottom: "2vh",
    },
  }, */
  /* ChipContainerMax600Px: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto auto auto",
    gridTemplateRows: "auto auto",
    gridAutoFlow: "dense",
  }, */
  /* chipMax600Px: {
    minWidth: "2rem",
    maxWidth: "15vw",
    maxHeight: "3vh",
    minHeight: "2vh",
    fontSize: "3.5vw",
    color: "white",
    background: "#FFBC5C",
    "& span": {
      overflow: "visible",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  }, */
}));


const RestaurantPage = ({address, image, name, phone, email, isOpen, delivery, pickup, lat, lng}) => {

  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <>

      <div className={classes.gridContainer}>
        <div className={classes.grid1}>
          <div className={classes.innerGrid1}>
            <Link to="/" style={{ color: "#FFBC5C", textDecoration: "none" }}>
              <p className={classes.restaurantLogo}>Foodies</p>
            </Link>
          </div>
          <div className={classes.innerGrid2}>
            <div>
              <h1 className={classes.h1}>{name}</h1>
              <h2 className={classes.h2}>{address}</h2>
              <p className={classes.p}>
                {phone}
                <br />
                {email}
              </p>

              <div>
                <div>
                  {Open && <Chip label="Open" className={classes.chip} />}
                  {!Open && <Chip label="Closed" className={classes.chip} />}
                  {Delivery && (
                    <Chip label="Delivery" className={classes.chip} />

                  )}
                  {Pickup && <Chip label="Pickup" className={classes.chip} />}
                </div>

               
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
};
export default RestaurantPage;
