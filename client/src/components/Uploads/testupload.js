import React from 'react';
import { FilePicker } from 'react-file-picker';
const fs = require('fs');



const FileUpload = () => {
  return(
  <FilePicker
    extensions={['pdf']}
    onChange={FileObject => (console.log(FileObject))}
    onError={errMsg => (console.log("shithead"))}
  >
    <button>
      Select File to Upload
    </button>
  
  </FilePicker>
  )};
  

function FileUp() {
    return <FileUpload />;
  }

  export default FileUp;

  // use formik with input type file maybe?
