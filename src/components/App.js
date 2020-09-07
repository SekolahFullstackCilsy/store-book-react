import React from "react";
import Header from "./Header";
import Book from "./Books";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact component={Book} path="/" />
        <Route component={AddBook} path="/add" />
        <Route component={UpdateBook} path="/edit/:id" />
      </Switch>
    </Router>
  );
}

export default App;
