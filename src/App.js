import React from 'react';
import './App.scss';
import Header from "./components/Header/header.component";

import { Route, Switch } from 'react-router-dom';
import ArticleList from './components/Article/ArticleList/articleList.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ArticleList} />
      </Switch>
    </div>
  );
}

export default App;
