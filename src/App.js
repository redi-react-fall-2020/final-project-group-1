import React, {useState, useEffect} from "react"
import './App.css';

function App() {
  const [restaurants, setRestaurants] = useState([])
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
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
