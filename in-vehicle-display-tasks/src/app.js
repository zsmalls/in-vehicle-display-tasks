import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import WordSearch from './views/wordSearch'
import TrackpadAndNumbers from './views/trackpadAndNumbers'
import Shapes from './views/shapes'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainMenu} />
          <Route exact path="/about" component={About} />
          <Route exact path="/code" component={Code} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/info" component={Info} />

          <Route path="//*" component={NotFound} />

          <Route exact path="/wordSearch" component={WordSearch} />
          <Route exact path="/trackpadAndNumbers" component={TrackpadAndNumbers} />
          <Route exact path="/shapes" component={Shapes} />

        </div>
      </Router>
    )
  }
}

const MainMenu = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <button>Main Menu</button>
        </Link>
        <Link to="/kjnabout">
          <button>About</button>
        </Link>
        <Link to="/code">
          <button>code</button>
        </Link>
        <Link to="/contact">
          <button>contact</button>
        </Link>
        <Link to="/info">
          <button>info</button>
        </Link>
      </div>
      <div>
        <Link to="/wordSearch">
          <button>Word Search</button>
        </Link>
        <Link to="/trackpadAndNumbers">
          <button>Trackpad and Numbers</button>
        </Link>
        <Link to="/shapes">
          <button>Shapes</button>
        </Link>
      </div>
    </div>
  );
};

const About = (props) => (
  <div>
    About gi3rugi3rug3og
  </div>
)

const Code = () => (
  <div>
    Code
  </div>
)

const Contact = () => (
  <div>
    Contact
  </div>
)

const Info = () => (
  <div>
    info
  </div>
)

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

export default App