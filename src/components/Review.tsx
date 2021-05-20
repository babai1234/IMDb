import Input from "./Input";
import Reviews from "./Reviews"

const Review = () => {
    
    return (
        <div className="text-gray-50 py-4">
            <label className="font-semibold text-3xl">Reviews</label>
            <Input />
            <Reviews />
        </div>
    );
}
 
export default Review;
