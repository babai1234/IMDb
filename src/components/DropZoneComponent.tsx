import { Dispatch, FunctionComponent, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'
import {AiFillFolderOpen} from 'react-icons/ai'
const DropZoneComponent: FunctionComponent<{type: string, title: string, setFile: Dispatch<any>}> = ({type, title, setFile}) => {

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
        setFile(acceptedFiles[0])
    },[])
    const {getRootProps, getInputProps, isDragAccept, isDragReject} = useDropzone({onDrop, multiple: false, accept: type})

    return (
        <div>
            <div {...getRootProps()}
            className={
                "px-6 h-40 w-full cursor-pointer rounded-md border-2 border-dashed border-gray-500 focus:outline-none my-4 " +
                (isDragReject === true ? "border-red-500" : "") +
                (isDragAccept === true ? "border-green-500" : "")
                }>
                <input {...getInputProps()}/>
                <div className="flex flex-col items-center justify-center space-y-2">
                    <AiFillFolderOpen className="h-12 w-12 text-gray-500" />
                    {
                        isDragReject ? (<p>Sorry! file not accepted</p>)
                        : (<p>Drag'n Drop {title}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DropZoneComponent;