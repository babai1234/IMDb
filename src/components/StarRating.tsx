import {AiFillStar} from 'react-icons/ai'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'

const StarRating = ({userRating}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(null)
    const router = useRouter()
    useEffect(() => {
        console.log(userRating);
        setRating(userRating)
    }, [])
    
    const postRateDataHandler = async(rate: number) => {
        const {movie_id} = router.query
        console.log(movie_id)
        const response = await fetch(`http://localhost:8082/movie/rating?movieId=${movie_id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "Application/JSON",
                "Authorization": localStorage.getItem("Token"),
                "u_id": localStorage.getItem("UserId")
            },
            body: JSON.stringify({rating: rate})
        })
        const res = await response.json()
        console.log(res)
    }

    return (
        <div className="flex pb-2">
            {[...Array(5)].map( (star, i) => {
                const rate = i+1
                return (
                <div 
                    key={rate} 
                    onClick={() => {setRating(rate);postRateDataHandler(rate)}}
                    className="cursor-pointer" 
                    onMouseEnter={() => setHover(rate)} 
                    onMouseLeave={() => setHover(null)}
                >
                    <input type="radio" name="rating" value={rate} className="hidden" />
                    <AiFillStar 
                        size="1.1em"
                        className="mr-1 fill-current hover:text-yellow-400"
                        color={(rate <= (hover || rating)) ? '#FBBF24' : '#9CA3AF'}
                    />
                </div>)
            })}
        </div>
    );
}
 
export default StarRating;