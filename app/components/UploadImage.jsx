import React, { useState, useEffect } from 'react';
import { uploadFileToS3 } from '../api/s3-upload/route';
import { IoIosClose } from "react-icons/io";

const UploadImage = ({ onFileChange }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleRemoveImage = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleUploadImage = async () => {
    try {
      setLoading(true);

      const uploadedFiles = await Promise.all(files.map(async (file) => {
        const fileBuffer = await file.arrayBuffer();
        const fileName = await uploadFileToS3(fileBuffer, file.name);
        return {
            // url:`https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${fileName}`
            url: `https://cdn.thedreamhome.click/${fileName}`
          };
      }));

      console.log('Uploaded files:', uploadedFiles);
      onFileChange(uploadedFiles);
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onFileChange(files);
  }, [files]);

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple className='rounded-md' />

      <div className='flex flex-wrap flex-row mt-5'>
        {files.map((file, index) => (
          <div key={index} className='relative mr-[10px] mb-[10px]'>
            <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} className='w-[100px] h-[100px] rounded-md' />
            <button onClick={() => handleRemoveImage(index)} className='absolute top-[5px] right-[5px] cursor-pointer'><IoIosClose /></button>
          </div>
        ))}
      </div>

      <button onClick={handleUploadImage} disabled={loading} className='mt-3 px-4 py-2 bg-black text-white rounded-md cursor-pointer'>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default UploadImage;
