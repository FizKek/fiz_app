import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { MainWrapper } from "../../components/MainWrapper/MainWrapper";
import { Button } from "../../components/Button/Button";
import styles from "./DivCentered.module.css";

import { Manager } from "../Manager/Manager";
import { Scholar } from "../Scholar/Scholar";
import { Provider } from "../Provider/Provider";

// import {Gallery} from "../../components/Gallery/Gallery";

export function Main() {
  return (
    <MainWrapper>
      {
        // provider? <Gallery />:<LackOfMetamask></LackOfMetamask>
        <Router>
          <Switch>
            <Route exact path="/">
              <div className={styles.Div}>
                <h2>Ты менеджер, школяр или провайдер?</h2>
              </div>
              <div className={styles.Div}>
                <Link to="/manager">
                  <Button> Manager </Button>
                </Link>
                <Link to="/scholar">
                  <Button> Scholar </Button>
                </Link>
                <Link to="/provider">
                  <Button> Provider </Button>
                </Link>
              </div>
            </Route>
            <Route path="/manager">
              <div className={styles.Div}>
                <Manager />
              </div>
            </Route>
            <Route path="/scholar">
              <div className={styles.Div}>
                <Scholar />
              </div>
            </Route>
            <Route path="/provider">
              <div className={styles.Div}>
                <Provider />
              </div>
            </Route>
          </Switch>
        </Router>
      }
    </MainWrapper>
  );
}
