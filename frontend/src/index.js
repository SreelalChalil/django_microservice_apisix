import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Home from './pages/home/Home';
import NewBlog from './pages/admin/NewBlog';
import * as serviceWorker from './serviceWorker';
import Layout from './layout/Layout';
ReactDOM.render(
  <Router >
    <Switch>
    
     <Route exact path='/' render={() => <App><Layout> <Home/> </Layout></App> } />
     <Route exact path='/admin/new' render={props => <App><Layout> <NewBlog {...props} /> </Layout></App> } />
      {/*  <Route exact path='/admin/edit' render={() => <App><Layout>  </Layout></App> } />
     <Route exact path='/admin/all' render={() => <App><Layout>  </Layout></App> } />
     */}
    </Switch>
  </Router>
, document.getElementById('root')
);

serviceWorker.unregister();
