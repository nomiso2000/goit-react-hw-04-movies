import React, { Component } from "react";
import movieAPI from "../services/movieAPI";

export default class Cast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    this.fetchCast();
  }
  urlForImg = "https://image.tmdb.org";
  imgParams = "/t/p/w200/";
  fetchCast = () => {
    movieAPI.fetchMovieByCast(this.props.match.params.movieId).then((result) =>
      this.setState({
        cast: result.cast,
      })
    );
  };
  render() {
    const { cast } = this.state;
    return (
      <ul>
        {cast &&
          cast.map((el) => (
            <li key={el.cast_id}>
              <img
                src={this.urlForImg + this.imgParams + el.profile_path}
                width="100"
                height="150"
              ></img>
              <br />
              <span>{el.name}</span>
              <br />
              <span>Character: </span>
              <span>{el.character}</span>{" "}
            </li>
          ))}
      </ul>
    );
  }
}
