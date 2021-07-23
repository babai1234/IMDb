import { useCallback } from 'react'
import {FaTimes} from 'react-icons/fa'

const ErrorModal = ({close, message, status}) => {

    const closeModalHandler = useCallback(() => {
        close(false)
    },[close])

    return (
        <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center z-10">
            <div className="bg-gray-200 w-2/5 py-2 px-3 rounded-lg shadow-xl text-gray-900">
                <div className="flex justify-between items-center border-b-2 border-gray-300">
                    <p className="text-lg font-bold">Request failed</p>
                    <FaTimes className="cursor-pointer hover:bg-gray-300" onClick={closeModalHandler}/>
                </div>
                <div className="mt-2  flex justify-center">
                    <p>{`${status}. ${message}`}</p>
                </div>
                <div className="mt-3 flex justify-center">
                    <button className="px-3 py-1 font-semibold rounded outline-none border-gray-900 hover:bg-gray-300" onClick={closeModalHandler}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal
