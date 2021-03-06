import React from "react";
import { makeStyles } from "@material-ui/core";
import backgroundImage from "../assets/lidye-1Shk_PkNkNw-unsplash.jpg";
import Nav from "./Nav";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  LandingArea: {
    width: "100%",
    textAlign: "left",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  heroArea: {
    width: "90%",
    margin: "auto",
    height: "90vh",
    display: "flex",
  },

  searchBlock: {
    marginTop: "auto",
    marginBottom: "auto",
    color: "white",
    /* fontSize: "5.5vh", */
    width: "100%",
  },

  searchInput: {
    display: "block",
    backgroundColor: "white",
    marginTop: "auto",
    marginBottom: "auto",
    width: "100%",
    minWidth: "13rem",
    maxWidth: "40rem",
    height: "4rem",
    borderRadius: "3rem",
    border: "none",
    outline: "none",
    paddingLeft: "1em",
    fontSize: "3vh",
    opacity: "0.45",
    color: "black",
  },
}));

const LandingArea = ({ searchedName, handleSearch }) => {
  const classes = useStyles();
  return (
    <div className={classes.LandingArea}>
      <Nav />
      <div className={classes.heroArea}>
        <div className={classes.searchBlock}>
          <h1 style={{ marginBottom: "0rem", fontSize: "8.5vh" }}>Hungry? </h1>
          <h1
            style={{
              marginBottom: "2rem",
              marginTop: "0.5rem",
              fontSize: "8.5vh",
            }}
          >
            Support <span style={{ color: "#FFBC5C" }}>Local</span> Restaurants
          </h1>
          <input
            placeholder="Find the nearest open restaurant"
            className={classes.searchInput}
            value={searchedName}
            onChange={handleSearch}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default LandingArea;
