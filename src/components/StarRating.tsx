import {AiFillStar} from 'react-icons/ai'
import {useState} from 'react'

const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const rateHandler = (rate: number) => {
        console.log(rate)
        setRating(rate)
        console.log(rating);
        
    }
    return (
        <div className="flex pb-2">
            {[...Array(5)].map( (star, i) => {
                const rate = i+1
                return (
                <div 
                    key={rate} 
                    onClick={() => {rateHandler(rate)}}
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