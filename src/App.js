import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./Home"
import {RestaurantPage} from "./RestaurantPage"
function App() {
  const [restaurants, setRestaurants] = useState([]);
  

  const getData = async () => {
    const response = await fetch(
      "https://redi-final-restaurants.herokuapp.com/restaurants"
    );
    const data = await response.json();
    console.log(data.results);
    return data.results;
  };

  useEffect(() => {
    getData().then((result) => {
      setRestaurants(result);
      console.log(result)
    });
  }, []);
  return (
        <Router>          
          <Switch>
            <Route exact path="/" component={() => <Home result={restaurants} />}></Route> 
            {restaurants.map((restaurant) => (
              <Route  path={"/" + restaurant.id} component={() => <RestaurantPage address={restaurant.formatted_address} image= {restaurant.photos[0].links[0]} name={restaurant.name} phone={restaurant.social.phone} email={restaurant.social.email} address={restaurant.formatted_address} Open={restaurant.opening_hours.open_now}  Delivery={restaurant.delivery} Pickup={restaurant.pickup}/>}/>
            ))}
          </Switch>
        </Router>
  );
}

export default App;
