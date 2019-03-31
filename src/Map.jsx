import React, { Component } from "react";
import {Route,NavLink,BrowserRouter} from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";


class Map extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <h1>New York City ZipCodes</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink> </li>
          <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>
        <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default Map;
