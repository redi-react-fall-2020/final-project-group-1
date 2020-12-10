import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Nav: {
    width: '90%',
    display: "flex",
    color: "#FFBC5C",
    margin: "auto",
    paddingTop: "1rem",
    fontFamily: "Niconne"
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.Nav}>
      <div>
        {" "}
        <Link to="/" style={{ color: "#FFBC5C", textDecoration: "none" }}>
          <h1>Foodies</h1>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
