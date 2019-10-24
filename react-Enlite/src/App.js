import React from 'react';
import './App.scss';
import Header from "./components/Header/header.component";

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/home.page';
import AuthenticationPage from './pages/AuthenticationPage/signin.page'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path='/signin' component={AuthenticationPage} />
        <Route exact path='/signup' component={AuthenticationPage} />
      </Switch>

    </div>
  );
}

export default App;