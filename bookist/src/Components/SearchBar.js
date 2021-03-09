import React, { Component } from 'react';


class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
    }

  }

  handleClear = () => {

    this.props.resetFn();
    this.setState({ userInput: '' })
  }

  render() {
    const { filterBooksFn } = this.props;

    return (
      <section>
        <input onChange={(e) => this.setState({ userInput: e.target.value })} value={this.state.userInput} />
        <button onClick={() => filterBooksFn(this.state.userInput)}>Search</button>
        <button onClick={() => this.handleClear()}>Clear Search</button>
      </section>
    )
  }
}


export default SearchBar;