import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme";
import { GlobalStyles } from "./GlobalDarkLightMode";
import { Text } from "./Text";
import { RestaurantPage } from "./RestaurantPage";
import "./App.css";

import { Cards } from "./Cards";

function App() {
  const [theme, setTheme] = useState("Light Mode");
  console.log("theme. " + theme);

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

  return (
    <ThemeProvider theme={theme === "Light Mode" ? lightTheme : darkTheme}>
      {/* <Cards /> */}
      <RestaurantPage />
      {/* <Text /> */}
      {/* <button
        onClick={toggleTheme}
        theme={theme === "Light Mode" ? lightTheme : darkTheme}
      >
        {theme === "Light Mode" ? "Dark Mode" : "Light Mode"}
      </button>
      <GlobalStyles /> */}
      {/* Pass the toggle functionality to the button */}

      <footer></footer>
    </ThemeProvider>
  );
}

export default App;
