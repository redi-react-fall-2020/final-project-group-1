import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./GlobalDarkLightMode";
import "./App.css";
import { lightTheme, darkTheme } from "./Theme";
import styled from 'styled-components'

import LandingArea from "./Components/LandingArea";
import FilterButton from "./Components/FilterButton";
import { Text } from "./Text";
import { RestaurantPage } from "./RestaurantPage";
import { Cards } from "./Cards";
const useStyles = makeStyles((theme) => ({
  filterArea: {
    /* margin: "auto", */
    width: "100%",
    /* textAlign: "right", */
    marginTop: "1em",
    marginBottom: "1em",
    paddingBottom: "1em",
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
flexWrap: 'wrap',
    borderBottom: "1px solid #38415C",
  },
  filterHeader: {
    fontWeight: "300",
    color: "#38415C",
    margin: "0 1em 0 0.5em",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1em",
    padding: '1rem',
    /* margin: "auto", */
    /* width:"90%", */
  },
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

  const StyledLink = styled(Link)`
  text-decoration: none;
`
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme === "Light Mode" ? lightTheme : darkTheme}>
      <div className="App">
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
            <StyledLink to={"/" + restaurant.id} >
              <Cards image= {restaurant.photos[0].links[0]}  name={restaurant.name} address={restaurant.formatted_address} Open={restaurant.opening_hours.open_now}  Delivery={restaurant.delivery} Pickup={restaurant.pickup}/>
            </StyledLink>
          ))}</div>
      </div>
    </ThemeProvider>
  );

  


      
}

export default Home;
