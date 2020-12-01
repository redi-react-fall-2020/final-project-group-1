import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    Nav: {
      width: '90%',
      display: "flex",
      color:"white",
      margin:"auto",
      paddingTop:"1rem",
      fontFamily:"Niconne"
    },
  }));

const Nav = () => {
    const classes = useStyles();
  return (
    <div className={classes.Nav}>
      <div>
        {" "}
        {/* <Link to="/"> */}
          <h1>Foodies</h1>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Nav;
