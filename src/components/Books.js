import React, { Component } from "react";
import axios from "axios";
import { HOST } from "../constants/api";
import CardBook from "./CardBook";

export default class Book extends Component {
  state = {
    book: [],
  };

  refresh = async () => {
    const books = await axios.get(`${HOST}/book`);
    if (books) {
      this.setState({
        book: books.data || [],
      });
    }
  };

  async componentDidMount() {
    return this.refresh();
  }

  render() {
    const renderData =
      this.state.book.length > 0 &&
      this.state.book.map((book) => (
        <CardBook key={book.id} book={book} refresh={this.refresh} />
      ));

    return (
      <div className="container">
        <div className="row">{renderData}</div>
      </div>
    );
  }
}
