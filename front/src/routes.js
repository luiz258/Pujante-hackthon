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
import Empatia_01 from "./Pages/Narrativa/Empatia/Empatia_01";
import Empatia_02 from "./Pages/Narrativa/Empatia/Empatia_02";
import Empatia_03 from "./Pages/Narrativa/Empatia/Empatia_03";
import Empatia_04 from "./Pages/Narrativa/Empatia/Empatia_04";
import Empatia_05 from "./Pages/Narrativa/Empatia/Empatia_05";
import Empatia_06 from "./Pages/Narrativa/Empatia/Empatia_06";
import Empatia_07 from "./Pages/Narrativa/Empatia/Empatia_07";
import Empatia_08 from "./Pages/Narrativa/Empatia/Empatia_08";
import Empatia_09 from "./Pages/Narrativa/Empatia/Empatia_09";
import Empatia_10 from "./Pages/Narrativa/Empatia/Empatia_10";


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" exact  component={LoginPage}/>
                <Route path="/narrativa/empatia/introducao/inicio" exact  component={EmpatiaIntroducaoInicio}/>
                <Route path="/narrativa/empatia/introducao/meio" exact  component={EmpatiaIntroducaoMeio}/>
                <Route path="/narrativa/empatia/01/" exact  component={Empatia_01}/>
                <Route path="/narrativa/empatia/02/" exact  component={Empatia_02}/>
                <Route path="/narrativa/empatia/03/" exact  component={Empatia_03}/>
                <Route path="/narrativa/empatia/04/" exact  component={Empatia_04}/>
                <Route path="/narrativa/empatia/05/" exact  component={Empatia_05}/>
                <Route path="/narrativa/empatia/06/" exact  component={Empatia_06}/>
                <Route path="/narrativa/empatia/07/" exact  component={Empatia_07}/>
                <Route path="/narrativa/empatia/08/" exact  component={Empatia_08}/>
                <Route path="/narrativa/empatia/09/" exact  component={Empatia_09}/>
                <Route path="/narrativa/empatia/10/" exact  component={Empatia_10}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;