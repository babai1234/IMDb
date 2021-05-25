import Navbar from "@components/Navbar";
import Video from "@components/Video";
import Review from "@components/Review";
import StarRating from "@components/StarRating";
import {AiFillStar} from 'react-icons/ai'
import { GetStaticProps, NextPage } from 'next'
import Input from '@components/Input';
import { review } from "@libs/types";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('http://localhost:3000/Review')
    const reviews = await res.json()
    return {
      props: {
        reviews,
      },
    }
  }

const Trailer: NextPage<{reviews: review[]}> = ({reviews}) => {
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
                                <AiFillStar size="1.1em" className="mr-1 text-yellow-400" />
                                7.5 (3455)
                            </span>
                        </p>
                        <div className="flex font-medium py-2 text-gray-50">
                            Rate <span className="ml-2 mt-1"><StarRating /></span>
                        </div>
                    </div>
                    <div className="text-gray-50 py-4">
                        <label className="font-semibold text-3xl">Reviews</label>
                        <Input />
                        {reviews.map(review => 
                            <Review review={review} key={review.review_id}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Trailer;