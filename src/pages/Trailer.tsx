import Navbar from "@components/Navbar";
import Video from "@components/Video";
import Review from "@components/Review";
import StarRating from "@components/StarRating";

const Trailer = () => {
    
    return (
        <div className="bg-black">
            <Navbar />
            <div className="py-7 flex m-auto w-7/12">
                <div>
                    <div className="mb-5">
                        <Video />
                    </div>
                    <div  className="border-b-2">
                        <h1 className="font-medium text-3xl text-gray-50">Introduction to HTML</h1>
                        <p className="flex font-medium pt-4 text-gray-50">
                            <span className="mr-4">Duration: 1hr 27min</span>
                            <span className="mr-4">Gener: Educational</span>
                            <span className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            7.5 (3455)</span>
                        </p>
                        <div className="flex font-medium py-2 text-gray-50">
                            Rate <span className="ml-2 mt-1"><StarRating /></span>
                        </div>
                    </div>
                    <Review />
                </div>
            </div>
        </div>
    );
}
 
export default Trailer;