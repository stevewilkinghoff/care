import React from 'react';
import { FilePicker } from 'react-file-picker'
 
const FileUpload = () => {
  return(
  <FilePicker
    extensions={['pdf']}
    onChange={FileObject => (console.log(FileObject.name))}
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