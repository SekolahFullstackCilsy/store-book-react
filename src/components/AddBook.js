import React, { Component } from "react";
import axios from "axios";
import { HOST } from "../constants/api";

export default class AddBook extends Component {
  state = {
    title: "",
    description: "",
    author: "",
    disabled: false,
  };

  handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlerSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      disabled: true,
    });
    await axios.post(`${HOST}/book`, this.state);

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <h2>Tambah Buku</h2>
        <form onSubmit={this.handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Book Title</td>
                <td>
                  <input
                    type="text"
                    name="title"
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>

              <tr>
                <td>Description</td>
                <td>
                  <input
                    type="text"
                    name="description"
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>

              <tr>
                <td>Author</td>
                <td>
                  <input
                    type="text"
                    name="author"
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <input
                    type="submit"
                    value="Tambah"
                    disabled={this.state.disabled}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
