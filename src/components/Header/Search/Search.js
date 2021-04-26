import React, { Component } from "react";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e });
  }

  render() {
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            placeholder="Search Your Feed"
            value={this.state.value}
            onChange={(e) => this.handleChange(e.target.value)}
          />

          <div onClick={() => this.props.searchFn(this.state.value)}>
            <SearchIcon id="Search__icon" />
          </div>
        </div>
      </section>
    );
  }
}
