import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth">
              <AuthApp />
            </Route>
            <Route path="/">
              <MarketingApp />
            </Route>
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
