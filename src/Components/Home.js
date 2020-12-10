import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { ThemeProvider } from "styled-components";

import styled from 'styled-components'

import LandingArea from "./LandingArea";
import FilterButton from "./FilterButton";
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
    gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",
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

  const getData = async () => {
    const response = await fetch(
      "https://redi-final-restaurants.herokuapp.com/restaurants"
    );
    const data = await response.json();
    return data.results;
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
    <>
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
              <Cards image= {restaurant.photos[0].links[0]}  name={restaurant.name} address={restaurant.formatted_address} isOpen={restaurant.opening_hours.open_now}  delivery={restaurant.delivery} pickup={restaurant.pickup}/>
            </StyledLink>
          ))}</div>
      </div>
    </>
  );

  


      
}

export default Home;