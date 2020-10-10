import React, { Component, Suspense, lazy } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";

import routes from "./routes";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              className="link"
              activeClassName="active-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className="link"
              activeClassName="active-link"
            >
              Movies
            </NavLink>
          </li>
        </ul>
        <hr />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route
            path={routes.home}
            exact
            component={lazy(() => import("./views/HomePage" /*HomePage*/))}
          />

          <Route
            path={routes.movies}
            exact
            component={lazy(() => import("./views/MoviesPage" /*MoviesPage*/))}
          />

          <Route
            path={routes.moviesId}
            component={lazy(
              () => import("./views/MovieDetailsPage") /*DetailsPage*/
            )}
          />

          <Redirect to="/" />
        </Suspense>
      </div>
    );
  }
}
