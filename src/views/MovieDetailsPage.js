import React, { Component, Suspense, lazy } from "react";
import movieAPI from "../services/movieAPI";
import { Link, Route } from "react-router-dom";
import routes from "../routes";

export default class MoviePage extends Component {
  state = {
    movie: {},
  };
  componentDidMount() {
    this.fetchMovie();
  }
  urlForImg = "https://image.tmdb.org";
  imgParams = "/t/p/w400/";
  fetchMovie = () => {
    movieAPI.fetchMovieByID(this.props.match.params.movieId).then((data) => {
      this.setState({
        movie: data,
      });
    });
  };
  goBack = () => {
    if (this.props.location.state && this.props.location.state.from) {
      return this.props.history.push(this.props.location.state.from);
    }
    this.props.history.push(routes.movies);
  };

  render() {
    const { movie } = this.state;

    return (
      <div>
        {" "}
        <button type="button" onClick={this.goBack}>
          Go back
        </button>
        <br />
        <img
          src={this.urlForImg + this.imgParams + movie.poster_path}
          // width="100"
          // height="150"
        ></img>
        <h1>{movie.original_title}</h1>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        {movie.genres &&
          movie.genres.map((el) => <span key={el.id}> {el.name} </span>)}
        <hr />
        <Link to={`${this.props.match.url}/Cast`}>Cast</Link>
        <br />
        <Link to={`${this.props.match.url}/Reviews`}>Reviews</Link>
        <hr />
        <Suspense>
          <Route
            path={`${this.props.match.path}/Cast`}
            component={lazy(() => import("../components/Cast" /*Cast*/))}
          />
          <Route
            path={`${this.props.match.path}/Reviews`}
            component={lazy(() => import("../components/Reviews" /*Reviews*/))}
          />
        </Suspense>
      </div>
    );
  }
}
