import React, { Component } from "react";
import axios from "axios";
import { HOST } from "../constants/api";

export default class UpdateBook extends Component {
  state = {
    id: "",
    title: "",
    description: "",
    author: "",
  };

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const response = await axios.get(`${HOST}/book/${id}`);
    this.setState({
      id: response.data.id,
      title: response.data.title,
      description: response.data.description,
      author: response.data.author,
    });
  };

  handlerSubmit = async (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    await axios.patch(`${HOST}/book/${id}`, this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h2>Halaman Update</h2>

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
                    value={this.state.title}
                  ></input>
                </td>
              </tr>

              <tr>
                <td>Description</td>
                <td>
                  <input
                    type="text"
                    name="description"
                    onChange={this.handlerChange}
                    value={this.state.description}
                  ></input>
                </td>
              </tr>

              <tr>
                <td>Author</td>
                <td>
                  <input
                    type="text"
                    name="author"
                    onChange={this.handlerChange}
                    value={this.state.author}
                  ></input>
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <input type="submit" value="Update" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
