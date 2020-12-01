import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./GlobalDarkLightMode";
import "./App.css";
import { lightTheme, darkTheme } from "./Theme";

import LandingArea from "./Components/LandingArea";
import FilterButton from "./Components/FilterButton";
import DemoPage from "./Components/DemoPage";
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
}));

function App() {
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
    getData().then((result) => {
      setRestaurants(result);
      setFilterdList(result);
      console.log(filterdList);
    });
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
        <RestaurantPage />
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
        <Router>
          {filterdList.map((restaurant) => (
            <Link to={"./" + restaurant.id}>
              <p>{restaurant.name}</p>
            </Link>
          ))}
          <Switch>
            {filterdList.map((restaurant) => (
              <Route path={"./" + restaurant.id} component={DemoPage}>
                <DemoPage name={restaurant.name} />
              </Route>
            ))}
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
