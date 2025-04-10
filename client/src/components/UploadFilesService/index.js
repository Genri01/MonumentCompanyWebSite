import React, { useEffect, useState } from 'react';
// import UploadService from "../services/upload-files.service";

export default function UploadFiles(props) {
  const [selectedFiles,setSelectedFiles] = useState(undefined);
  const [progressInfos,setProgressInfos] = useState([]);
  const [message,setMessage] = useState([]);
  const [fileInfos,setFileInfos] = useState([]);
 


  useEffect(() => {
    // UploadService.getFiles().then((response) => {
    //   this.setState({
    //     fileInfos: response.data,
    //   });
    // });
  },[])
 
 
  function selectFile(event) { 
    setProgressInfos([]);
    setSelectedFiles(event.target.files) 
  }

  function upload(idx, file) {
    let _progressInfos = [...progressInfos];

    // UploadService.upload(file, (event) => {
    //   _progressInfos[idx].percentage = Math.round((100 * event.loaded) / event.total);
    //   this.setState({
    //     _progressInfos,
    //   });
    // })
    //   .then((response) => {
    //     this.setState((prev) => {
    //       let nextMessage = [...prev.message, "Uploaded the file successfully: " + file.name];
    //       return {
    //         message: nextMessage
    //       };
    //     });

    //     return UploadService.getFiles();
    //   })
    //   .then((files) => {
    //     this.setState({
    //       fileInfos: files.data,
    //     });
    //   })
    //   .catch(() => {
    //     _progressInfos[idx].percentage = 0;
    //     this.setState((prev) => {
    //       let nextMessage = [...prev.message, "Could not upload the file: " + file.name];
    //       return {
    //         progressInfos: _progressInfos,
    //         message: nextMessage
    //       };
    //     });
    //   });
  }

 
  function uploadFiles() {
 
    let _progressInfos = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      _progressInfos.push({ percentage: 0, fileName: selectedFiles[i].name });
    } 

    setProgressInfos(_progressInfos);
    setMessage([])
 
    for (let i = 0; i < selectedFiles.length; i++) {
      upload(i, selectedFiles[i]);
    } 
  }
 
  return (
    <>
      <div style={{width: '100px', height: '50px'}}>{'selectedFiles'}</div>
      <div></div>
      <label className="btn btn-default">
          <input type="file" onChange={selectFile} />
        </label>

        <button className="btn btn-success"
          disabled={!selectedFiles}
          onClick={uploadFiles}
        >
          Upload
        </button>
    </>
  ) 
}