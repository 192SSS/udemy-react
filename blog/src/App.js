import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/Home';
import { Posts } from './pages/Posts';
import { PostDetailPage } from './pages/PostDetail';
import { PostFormPage } from './pages/PostForm';

export default function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/meus-posts" exact>
              <Posts />
            </Route>
            <Route path="/post/novo" exact>
              <PostFormPage />
            </Route>
            <Route path="/post/:postId" exact>
              <PostDetailPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
