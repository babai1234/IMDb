import { Dispatch, FunctionComponent, useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";
import { AiFillFolderOpen } from "react-icons/ai";

const DropZoneComponent: FunctionComponent<{
  type: string;
  title: string;
  setFile: Dispatch<any>;
}> = ({ type, title, setFile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
    setPreview(acceptedFiles[0]);
  }, []);
  const [preview, setPreview] = useState(null);
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({ onDrop, multiple: false, accept: type });

  return (
    <div>
      <div
        {...getRootProps()}
        className={
          "px-6 h-40 w-full relative cursor-pointer rounded-md border-2 border-dashed border-gray-500 focus:outline-none my-4 " +
          (isDragReject === true ? "border-red-500" : "") +
          (isDragAccept === true ? "border-green-500" : "")
        }
      >
        <input {...getInputProps()} />
        {preview && (
          <img
            src={URL.createObjectURL(preview)}
            className="absolute top-0 left-0 object-contain w-full h-full mx-auto my-0"
          />
        )}{" "}
        <div className="absolute left-0 flex flex-col items-center justify-center w-full h-full space-y-2 text-white">
          <AiFillFolderOpen className="w-12 h-12" />
          {isDragReject ? (
            <p>Sorry! file not accepted</p>
          ) : (
            <p>Drag n Drop {title}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropZoneComponent;
