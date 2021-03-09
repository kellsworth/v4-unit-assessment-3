import React, { Component } from 'react';
import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header';
import Shelf from './Components/Shelf';
import data from './data.js';
import SearchBar from './Components/SearchBar.js';



class App extends Component {
  constructor() {
    super();

    this.state = {
      books: data,
      shelf: [],
    }
  }

  addToShelf = (bookTitle) => {
    this.setState({ ...this.state, shelf: [...this.state.shelf, bookTitle] })

  }

  clearShelf = () => {
    this.setState({ ...this.state, shelf: [] })
  }

  filterBooks = (input) => {
    const filteredBooks = this.state.books.filter((book) => book.title.includes(input))
    this.setState({ books: filteredBooks })
  }

  reset = () => {
    this.setState({ books: data })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooksFn={this.filterBooks} resetFn={this.reset} />

        <BookList books={this.state.books} addToShelfFn={this.addToShelf} />
        <Shelf shelf={this.state.shelf} clearShelfFn={this.clearShelf} />
      </div>
    );
  }
}
export default App;
