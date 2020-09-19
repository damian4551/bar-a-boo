import React, { useContext } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

//context
import { RestaurantContext } from "../context";

//pages
import Restaurant from "../pages/restaurant";
import Home from "../pages/home";

//framer-motion
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const restaurantInfo = useContext(RestaurantContext);
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <Home />
          </Route>
          {restaurantInfo.map(
            ({
              path,
              city,
              name,
              facebook,
              instagram,
              phone,
              background,
              hours,
              street,
              email,
              cords,
            }) => (
              <Route path={path} key={name} exact>
                <Restaurant
                  city={city}
                  name={name}
                  facebook={facebook}
                  instagram={instagram}
                  phone={phone}
                  background={background}
                  hours={hours}
                  street={street}
                  email={email}
                  path={path}
                  cords={cords}
                />
              </Route>
            )
          )}
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Routes;
