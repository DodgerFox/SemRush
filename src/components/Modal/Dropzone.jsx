import React from "react";
import { useDropzone } from "react-dropzone";
import image from '../../assets/images/icon_image.svg'


const getClassName = (className, isActive) => {
    if (!isActive) return className;
    return `${className} ${className}-active`;
  };

const Dropzone = ({ onDrop, accept }) => {

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });


  return (
    <div className={"modal-dropzone " + getClassName("dropzone", isDragActive)} {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
        <img src={image} alt="icon of image" />
        {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>
        ) : (
            <p className="dropzone-content">select an image file to upload or drag it here</p>
        )}
    </div>
  );

}

export default Dropzone;