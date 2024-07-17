// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blog from './pages/blog';
import AddPost from './components/AddPost';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-post">Add Post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Blog} />
          <Route path="/add-post" component={AddPost} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
