import Image from 'next/image'
import {useState} from 'react'

const Input = ({postData}) => {
    const [content, setContent] = useState('')
    const postHandler = () => {
        postData(content)
        setContent('')
    }
    return (
        <div className="py-4 flex">
            <div className="flex-shrink-0 mt-2">
                <Image 
                    src="/avatar.png" 
                    width="40" 
                    height="40" 
                    className=" rounded-full"
                />
            </div>
            <input 
                type="text" 
                onChange={(event) => setContent(event.target.value)} 
                placeholder="Type your comment" 
                value={content} 
                className=" bg-transparent outline-none border-b-2 w-full mx-4 px-1"
            />
            <div>
                <button 
                    onClick={postHandler} 
                    className="bg-blue-600 text-gray-50 outline-none rounded-md mt-4 py-1 px-10"
                >
                    Post
                </button>
            </div>
        </div>
    );
}
 
export default Input;