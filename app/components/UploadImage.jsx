'use client'
import { Input } from 'postcss';
import React, { useState, useEffect } from 'react';
import { FilePond, registerPlugin,  } from 'react-filepond';
import 'filepond/dist/filepond.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateSize from 'filepond-plugin-image-validate-size';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

const UploadImage = ({ onUpload }) => {
    registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateSize, FilePondPluginFileEncode, FilePondPluginImageExifOrientation);
  const [files, setFiles] = useState([]);

  const handleUpdateFiles = (fileItems) => {
    setFiles(fileItems.map((fileItem) => fileItem.file));
  };

  const handleUpload = () => {
    // Bạn có thể xử lý logic upload ở đây hoặc chuyển các file đã chọn tới component cha
    onUpload(files);
  };

  return (
    <div>
     <FilePond
        files={files}
        allowMultiple={true}
        maxFiles={4}
        maxFileSize="10MB"
        server={{ process: null }}
        onupdatefiles={handleUpdateFiles}
      />
    </div>
  );
};

export default UploadImage;
