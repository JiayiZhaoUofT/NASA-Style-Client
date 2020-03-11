import React, { Component } from "react";
import axios from "axios";

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      file: null
    };
  }

  submitFile = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.file[0]);
    axios
      .post("http://localhost:5000/images/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        console.log(response.data);
        // handle your response;
      })
      .catch(error => {
        console.log(error);
        // handle your error
      });
  };

  handleFileUpload = event => {
    this.setState({ file: event.target.files });
    console.log(event.target.files);
  };

  render() {
    return (
      <form onSubmit={this.submitFile}>
        <input
          label="upload file"
          type="file"
          onChange={this.handleFileUpload}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default FileUpload;
