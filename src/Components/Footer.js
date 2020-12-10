import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "black",
        height: "4rem",
        color: "white",
        padding: "0.4rem",
        fontWeight: "100",
        width: "100%",
        textAlign: "center",
        fontSize: "1.2rem",
        marginTop: "1rem"
      }
}));

const Footer = () => {
    const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p>
        © 2020 Foodies Restaurants Finder 
      </p>
    </footer>
  );
};

export default Footer;
