import React from "react";

class SearchBar extends React.Component {
  state = {
    value: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.value);
  };

  onChangSearch = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Youtube search</label>
            <input
              type="text"
              onChange={this.onChangSearch}
              value={this.state.value}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
