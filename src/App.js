import React from "react";
import { Switch, Route } from "react-router-dom";

import AxiosDemo from "./Component/Comp_D/AxiosDemo";
import Counter from "./Component/Compo_A/Counter";
import GetTime from "./Component/Compo_A/GetTime";
import ShowGreetings from "./Component/Compo_A/ShowGreetings";
import ErrorPage from "./Component/Compo_C/ErrorPage";

import "./css/app.css";

function App() {
  console.log("App component called");
  return (
    <>
      <Switch>
        <Route exact path="/" component={ShowGreetings} />
        <Route path="/api" component={AxiosDemo} />
        <Route path="/counter" component={Counter} />
        <Route path="/time" component={GetTime} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
