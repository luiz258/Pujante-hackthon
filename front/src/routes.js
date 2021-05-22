import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/Home'


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" exact  component={LoginPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;