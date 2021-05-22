import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" exact  component={LoginPage}/>
                <Route path="/list-message/:id" exact  component={ListPage}/>
                <PrivateRoute  path="/register-message" exact component={RegisterPage}/>
                <Route path="/message/:id" exact component={MessagePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;