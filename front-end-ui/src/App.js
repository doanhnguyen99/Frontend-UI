import React from 'react';
import './asset/bootstrap-4.0.0/css/bootstrap.css';
import './asset/font-awesome/css/font-awesome.min.css'; 
import Login from  './components/Login/Login';
import HomePage from './components/Home/Home';
import ProduceDetail from './components/ProduceDetail'

import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/produce-detail">
            <ProduceDetail />
          </Route>
          <Route path="/header">
            
          </Route>
          <Route path="/login">
            <Header/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          
          
        </Switch>
        
      </div>
    </Router>
  );
}


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
