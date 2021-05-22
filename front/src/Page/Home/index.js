import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Navbar from "./../../components/Navbar";
import Grid from '@material-ui/core/Grid';
import Inicio from "../Narrativa/Empatia/EmpatiaIntroducao/Inicio";

function Home(){
    return (
      <Grid >
       <Navbar ></Navbar>
       <Inicio></Inicio>
       </Grid>
    )
}

export default Home;