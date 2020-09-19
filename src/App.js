import React from "react";
import "./App.scss";

import Routes from "./components/routes";

//context provider
import { RestaurantProvider } from "./context";

function App() {
  return (
    <RestaurantProvider>
      <Routes />
    </RestaurantProvider>
  );
}

export default App;
