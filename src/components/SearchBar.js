import React, { Component } from "react";
import parseQueryString from "../utils/parseQueryString";
export default class SearchBar extends Component {
  state = {
    inputValue: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };
  handleChange = ({ target }) => {
    this.setState({
      inputValue: target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Search movies"
        ></input>

        <button type="submit">Search</button>
      </form>
    );
  }
}
