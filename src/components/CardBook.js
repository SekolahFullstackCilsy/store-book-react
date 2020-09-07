import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HOST } from "../constants/api";

class CardBook extends Component {
  deleteBook = async () => {
    await axios.delete(`${HOST}/book/${this.props.book.id}`);
    return this.props.refresh();
  };

  render() {
    return (
      <div className="col-md-4 card" style={{ margin: 5 }}>
        <h3>Title: {this.props.book.title}</h3>
        <small>Desc: {this.props.book.description}</small>
        <h4>Author: {this.props.book.author}</h4>
        <hr></hr>
        <div>
          <Link to={"/edit/" + this.props.book.id}>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </Link>
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={this.deleteBook}
            style={{
              cursor: "pointer",
              marginLeft: 10,
              color: "blue",
            }}
          ></i>
        </div>
      </div>
    );
  }
}
export default CardBook;
