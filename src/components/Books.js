import React, { Component } from "react";
import axios from "axios";
import { HOST } from "../constants/api";
import CardBook from "./CardBook";

export default class Book extends Component {
  state = {
    book: [],
  };

  async componentDidMount() {
    const books = await axios.get(`${HOST}/book`);
    this.setState({
      book: books.data,
    });
  }

  render() {
    const renderData =
      this.state.book.length > 0 &&
      this.state.book.map((book) => <CardBook key={book.id} book={book} />);

    return <div>{renderData}</div>;
  }
}
