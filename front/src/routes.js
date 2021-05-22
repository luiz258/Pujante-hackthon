import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/Home'
import EmpatiaIntroducaoInicio from './Pages/Narrativa/Empatia/EmpatiaIntroducao/Inicio'
import EmpatiaIntroducaoMeio from './Pages/Narrativa/Empatia/EmpatiaIntroducao/Meio'


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" exact  component={LoginPage}/>
                <Route path="/narrativa/empatia/introducao/inicio" exact  component={EmpatiaIntroducaoInicio}/>
                <Route path="/narrativa/empatia/introducao/meio" exact  component={EmpatiaIntroducaoMeio}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;