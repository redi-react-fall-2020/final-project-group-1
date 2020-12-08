import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./Home"
import RestaurantPage from "./RestaurantPage"
function App() {
  const [restaurants, setRestaurants] = useState([]);
  

  const getData = async () => {
    const response = await fetch(
      "https://redi-final-restaurants.herokuapp.com/restaurants"
    );
    const data = await response.json();
    return data.results;
  };

  useEffect(() => {
    getData().then((result) => {
      setRestaurants(result);
    });
  }, []);
  return (
        <Router>          
          <Switch>
            <Route exact path="/" component={() => <Home result={restaurants} />}>
              </Route> 
            {restaurants.map((restaurant) => (
              <Route  path={"/" + restaurant.id} component={() => <RestaurantPage address={restaurant.formatted_address} image= {restaurant.photos[0].links[0]} name={restaurant.name} phone={restaurant.social.phone} email={restaurant.social.email} address={restaurant.formatted_address} isOpen={restaurant.opening_hours.open_now}  delivery={restaurant.delivery} pickup={restaurant.pickup} lat={restaurant.geometry.location.lat} lng={restaurant.geometry.location.lng}/>}/>
            ))}
          </Switch>
        </Router>
  );
}

export default App;
