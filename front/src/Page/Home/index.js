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


function Home(){
    return (
       <Navbar></Navbar>
    )
}

export default Home;