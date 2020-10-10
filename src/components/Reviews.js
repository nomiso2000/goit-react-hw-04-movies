import React, { Component } from "react";
import movieAPI from "../services/movieAPI";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    movieAPI
      .fetchMovieByReview(this.props.match.params.movieId)
      .then((result) =>
        this.setState({
          reviews: result.results,
        })
      );
  };
  render() {
    const { reviews } = this.state;

    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map((el) => (
            <li key={el.id}>
              <h2>Author: </h2> <h3>{el.author}</h3> <br /> <p>{el.content}</p>
            </li>
          ))
        ) : (
          <span>We don't have any reviews for this movie</span>
        )}
      </ul>
    );
  }
}
