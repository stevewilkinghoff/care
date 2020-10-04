import React from 'react';
import axios from 'axios';
import FileUpload from '../src/components/Uploads/fuckaround';

const FileUpload = FileUpload;

export default class FileUploader extends React.Component {
  state = {
    fileName: ''    
  }

  handleChange = event => {
    this.setState({ fileName: event.target.value
    });
}

  handleSubmit = event => {
    event.preventDefault();

    const file = {
      fileName: this.state.fileName
    };
    console.log(file);
    FileUpload(file);
    //axios.post(`http://localhost:4001/api/residentadd`, { user })
    //  .then(res => {
    //    console.log(res);
    //   console.log(res.data);
    //  })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="file" name="fileName" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
