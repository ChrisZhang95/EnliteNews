import React from 'react';
import './App.scss';
import Header from "./components/Header/header.component";

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/home.page';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>

    </div>
  );
}

export default App;
