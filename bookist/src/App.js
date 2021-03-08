import logo from './logo.svg';
import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header';
import Shelf from './Components/Shelf';


function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>
      <BookList />
      <Shelf />
    </div>
  );
}

export default App;
