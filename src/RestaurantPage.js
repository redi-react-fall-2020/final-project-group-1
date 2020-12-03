import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
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
    height: "100vh",
  },

  gridContainer: {
    height:"100vh",
    display: "grid",
    gridTemplateColumns: "30% 70%",
    /* gridTemplateRows: "67.625rem", */
    
    width: "100%",
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
    fontFamily:"Niconne",
    position: "relative",
    
    color: "#FFBC5C",
    padding: "10% 0 0 15%",
  },
  innerGrid2: {
    fontSize: "5vw",
    padding: "0 10% 0 15%",
  },
  restaurantLogo: {
    left: "15%",
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

  //-------------Max 600px -------------//
  h1Max600Px: {
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
    display: "grid",
    /* gridTemplateColumns: "1fr", */
    gridTemplateRows: "15% 85%",
    gap: "0px 0px",
    padding: "0 2%",
  },
  grid2Max600Px: {
    padding: "0 2%",
  },
  innerGrid1Max600Px: {
    fontFamily:"Niconne",
    
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
  },
  /* ChipContainerMax600Px: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto auto auto",
    gridTemplateRows: "auto auto",
    gridAutoFlow: "dense",
  }, */
  chipMax600Px: {
    /* margin: "0.2rem 0.2rem", */
    minWidth: "2rem",
    maxWidth: "15vw",
    /* height: "2.5vh", */
    maxHeight: "3vh",
    minHeight: "2vh",
    fontSize: "3.5vw",
    color: "white",
    background: "#FFBC5C",
    "& span": {
      overflow: "visible",
      whiteSpace: "nowrap",
      /*  paddingLeft: '1vh',
      paddingRight: '1vh' */
      textOverflow: "ellipsis",
    },
  },
}));

const RestaurantPage = ({address, image, name, phone, email, Open, Delivery, Pickup}) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <>
      {matches ? (
        <div className={classes.gridContainer}>
          <div className={classes.grid1}>
            <div className={classes.innerGrid1}>
            <Link to="/"  style={{color: "#FFBC5C", textDecoration: "none"} } >
              <h1>Foodies</h1>
              </Link>
            </div>
            <div className={classes.innerGrid2}>
              <div>
      <h1 className={classes.h1}>{name}</h1>
      <h2 className={classes.h2}>{address}</h2>
                <p className={classes.p}>
                  {phone}<br/>
                  {email}
                </p>

                <div>
                  {matches ? (
                    <div>
                      
                     {Open && <Chip label="Open" className={classes.chip} />}
       {!Open && <Chip label="Closed" className={classes.chip} />}
       {Delivery && <Chip label="Delivery" className={classes.chip} />}
       {Pickup && <Chip label="Pickup" className={classes.chip} />}
                    </div>
                  ) : (
                    <div>
                     {Open && <Chip label="Open" className={classes.chip} />}
       {!Open && <Chip label="Closed" className={classes.chip} />}
       {Delivery && <Chip label="Delivery" className={classes.chip} />}
       {Pickup && <Chip label="Pickup" className={classes.chip} />}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={classes.grid2}>
            <img src={image} alt="pizza" className={classes.pizzaImg}></img>
          </div>
        </div>
      ) : (
        <div className={classes.gridContainerMax600Px}>
          <div className={classes.grid1Max600Px}>
            <div className={classes.innerGrid1Max600Px}>
      
              Foodies
            </div>
            <div className={classes.innerGrid2Max600Px}>
              <div>
      <h1 className={classes.h1Max600Px}>{name}</h1>
                <p className={classes.pMax600Px}>
                {phone}<br/>
                  {email}
                </p>
      <h2 className={classes.h2Max600Px}>{address}</h2>
              </div>
              <div className={classes.ChipContainerMax600Px}>
                <Chip label="Open" className={classes.chipMax600Px} />
                <Chip label="Vegan" className={classes.chipMax600Px} />
                <Chip label="Delivery" className={classes.chipMax600Px} />
              </div>
            </div>
          </div>
          <div className={classes.grid2Max600Px}>
            <img src={image} alt="pizza" className={classes.pizzaImg}></img>
          </div>
          {/* <div>{matches ? "Hello" : "World"}</div> */}
        </div>
      )}
    </>
  );
};
export default RestaurantPage ;
