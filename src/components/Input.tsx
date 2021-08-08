import Image from 'next/image'
import { useRouter } from 'next/router'
import {useState} from 'react'

const Input = () => {
    const [review, setReview] = useState('')
    const router = useRouter()
    const postHandler = async() => {
        const {movie_id} = router.query
        console.log(movie_id)
        const response = await fetch(`http://localhost:8082/movie/review?movieId=${movie_id}`,{
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
                "Authorization": localStorage.getItem("Token"),
                "u_id": localStorage.getItem("UserID")
            },
            body: JSON.stringify({content: review})
        })
        setReview('')
        console.log(response)
        const res = await response.json()
        console.log(res)
    }
    return (
        <div className="py-4 flex">
            <div className="flex-shrink-0 mt-2">
                <Image src="/avatar.png" width="40" height="40" className=" rounded-full"/>
            </div>
            <input type="text" onChange={(event) => setReview(event.target.value)} placeholder="Type your comment" value={review} className=" bg-transparent outline-none border-b-2 w-full mx-4 px-1"/>
            <div>
                <button onClick={postHandler} className="bg-blue-600 text-gray-50 outline-none rounded-md mt-4 py-1 px-10">
                    Post
                </button>
            </div>
        </div>
    );
}
 
export default Input;