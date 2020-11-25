import React, {useState, useEffect} from "react"
import './App.css';
import LandingArea from "./Components/LandingArea";

function App() {
  const [restaurants, setRestaurants] = useState([])
  const [searchedName, setSearchedName] = useState()
  const [filterdList, setFilterdList] = useState([])
  const getData = async () => {
    const response = await fetch("https://redi-final-restaurants.herokuapp.com/restaurants");
    const data = await response.json();
    console.log(data.results);
    return data.results;
  };
  useEffect(() => {
    getData().then((result) => {
      setRestaurants(result);
    });
  }, []);
 
  const handleSearch = (e) =>{
    setSearchedName(e.target.value)
    setFilterdList(restaurants.filter(restaurant=>restaurant.name.toLowerCase().includes(searchedName)))
  }
  return (
    <div className="App">
      <LandingArea searchedName={searchedName} handleSearch={handleSearch}/>
      {searchedName ? filterdList.map((restaurant)=>(<p>{restaurant.name}</p>)) : restaurants.map((restaurant)=>(<p>{restaurant.name}</p>))}
    </div>
  );
}

export default App;
