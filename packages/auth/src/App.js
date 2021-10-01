import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Signup from "./components/Signup";
import SignIn from "./components/Signin";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <SignIn />
            </Route>
            <Route exact path="/auth/signup">
              <Signup />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
