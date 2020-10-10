import React, { Component } from "react";
import movieAPI from "../services/movieAPI";
import { Link } from "react-router-dom";
import parseQueryString from "../utils/parseQueryString";
import SearchBar from "../components/SearchBar";

export default class Searcbar extends Component {
  state = {
    searchMovie: [],
  };

  componentDidMount() {
    const { query } = parseQueryString(this.props.location.search);
    if (query) {
      movieAPI.fetchArticlesByQuery(query).then((data) =>
        this.setState({
          searchMovie: data,
        })
      );
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = parseQueryString(prevProps.location.search);
    const { query: nextQuery } = parseQueryString(this.props.location.search);
    if (prevQuery !== nextQuery) {
      movieAPI.fetchArticlesByQuery(nextQuery).then((data) =>
        this.setState({
          searchMovie: data,
        })
      );
    }
  }
  handleChangeQuery = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleChangeQuery} />
        <ul>
          {this.state.searchMovie.map((el) => (
            <li key={el.id} data-id={el.id}>
              <Link
                to={{
                  pathname: `${this.props.match.url}/${el.id}`,
                  state: { from: this.props.location },
                }}
              >
                {" "}
                {el.original_title ? el.original_title : el.original_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
