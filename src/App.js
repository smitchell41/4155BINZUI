import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import About from "./components/about";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Listings from "./components/listings";
import Create from "./components/create";
import Edit from "./components/edit";
import logo from "./logo.png";

class App extends Component {

  

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="https://codingthesmartway.com"
              target="_blank"
            >
              <img
                src={logo}
                width="200"
                height="200"
                alt="CodingTheSmartWay.com"
              />
            </a>
            <Link to="/" className="navbar-brand">
              BINZ - Let Us Lease The Way!
            </Link>
            <div className="collapse nav-collapse show">
              <ul className="navbar-av mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/users/signin" className="nav-link">
                    Sign In
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/users/signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/listings" className="nav-link">
                    Listings
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <h2></h2>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users/signin" component={SignIn} />
          <Route path="/users/signup" component={SignUp} />
          <Route path="/listings" component={Listings} />
          <Route path="/create" component={Create} />
          <Route path="/edit" component={Edit} />
        </div>
      </Router>
    );
  }
}

export default App;
