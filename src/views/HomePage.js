import React, { Component } from "react";
import movieAPI from "../services/movieAPI";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  state = {
    movie: [],
  };
  componentDidMount() {
    this.fetchArticles();
  }
  fetchArticles = () => {
    movieAPI.fetchPopularMovie().then((data) =>
      this.setState({
        movie: data,
      })
    );
  };
  render() {
    return (
      <ul>
        {this.state.movie.map((el) => (
          <li key={el.id} data-id={el.id}>
            <Link
              to={{
                pathname: `/movies/${el.id}`,
                state: { from: this.props.location },
              }}
            >
              {el.original_title ? el.original_title : el.original_name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
