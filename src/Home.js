import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./GlobalDarkLightMode";
import "./App.css";
import { lightTheme, darkTheme } from "./Theme";

import LandingArea from "./Components/LandingArea";
import FilterButton from "./Components/FilterButton";
import { Text } from "./Text";
import { RestaurantPage } from "./RestaurantPage";
import { Cards } from "./Cards";
const useStyles = makeStyles((theme) => ({
  filterArea: {
    margin: "auto",
    width: "90%",
    textAlign: "right",
    marginTop: "2rem",
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #38415C",
    paddingBottom: "1rem",
  },
  filterHeader: {
    fontWeight: "300",
    color: "#38415C",
    margin: "0",
  },
  cardsGrid:{
    display: "grid",
    gridTemplateColumns: "30% 30% 30%",
    gap:"3%",
    width:"90%",
    margin: "auto",
    
  }
}));

function Home({result}) {
  const [restaurants, setRestaurants] = useState([]);
  const [searchedName, setSearchedName] = useState();
  const [clearFilter, setClearFilter] = useState();
  const [filterdList, setFilterdList] = useState([]);
  const [theme, setTheme] = useState("Light Mode");

  const getData = async () => {
    const response = await fetch(
      "https://redi-final-restaurants.herokuapp.com/restaurants"
    );
    const data = await response.json();
    console.log(data.results);
    return data.results;
  };

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "Light Mode") {
      setTheme("Dark Mode");
      // otherwise, it should be light
    } else {
      setTheme("Light Mode");
    }
  };

  useEffect(() => {
    
      setRestaurants(result);
      setFilterdList(result);
      console.log(filterdList);
  
  }, []);

  useEffect(() => {
    searchedName === "" && setFilterdList(restaurants);
    clearFilter === "clear" && setFilterdList(restaurants);
  }, [searchedName, clearFilter]);

  const handleSearch = (e) => {
    setSearchedName(e.target.value);
    setFilterdList(
      restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchedName)
      )
    );
  };

  const handleFilter = (value) => {
    switch (value) {
      case "Pickup":
        setFilterdList(restaurants.filter((restaurant) => restaurant.pickup));
        break;
      case "Delivery":
        setFilterdList(restaurants.filter((restaurant) => restaurant.delivery));
        break;
      case "Open":
        setFilterdList(
          restaurants.filter((restaurant) => restaurant.opening_hours.open_now)
        );
        break;
      case "Closed":
        setFilterdList(
          restaurants.filter(
            (restaurant) => restaurant.opening_hours.open_now === false
          )
        );
        break;
    }
  };
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme === "Light Mode" ? lightTheme : darkTheme}>
      <div className="App">
        {/* <RestaurantPage /> */}
        <LandingArea searchedName={searchedName} handleSearch={handleSearch} />
        <div className={classes.filterArea}>
          <h1 className={classes.filterHeader}>Restaurants near you</h1>
          <div>
            <FilterButton
              setClearFilter={setClearFilter}
              value="Pickup"
              handleFilter={handleFilter}
            />
            <FilterButton
              setClearFilter={setClearFilter}
              value="Delivery"
              handleFilter={handleFilter}
            />
            <FilterButton
              setClearFilter={setClearFilter}
              value="Open"
              handleFilter={handleFilter}
            />
            <FilterButton
              setClearFilter={setClearFilter}
              value="Closed"
              handleFilter={handleFilter}
            />
          </div>
        </div>
          <div className={classes.cardsGrid}> 
          {filterdList.map((restaurant) => (
            <Link to={"/" + restaurant.id}  style={{textDecoration: "none"} } >
              <Cards image= {restaurant.photos[0].links[0]}  name={restaurant.name} address={restaurant.formatted_address} Open={restaurant.opening_hours.open_now}  Delivery={restaurant.delivery} Pickup={restaurant.pickup}/>
            </Link>
          ))}</div>
      </div>
    </ThemeProvider>
  );

  


      
}

export default Home;
