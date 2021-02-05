import React, {Suspense} from 'react';
import NavigationMenu from './Components/NavigationMenu'
import './Styles/css/main.css'
import {menuItem} from './Routes/MenuItem'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {Routes} from './Routes/Routes'

function App() {
  return (
    <div id="App">
      <NavigationMenu menu = {menuItem} />
      <div id="page-wrap">
      <Router>
        <Suspense fallback={<div className="loading">Loading...</div>}>
        <Switch>
          {
            Routes.map((item)=>(
              <Route exact path={item.pathname} component={item.component}/>
            ))
          }
        </Switch>
        </Suspense>
      </Router>
      </div>
    </div>
  );
}

export default App;
