import axios from "axios";
import {AiFillStar} from 'react-icons/ai'
import { GetServerSideProps, NextPage } from 'next'

import Video from "@components/Video";
import Review from "@components/Review";
import StarRating from "@components/StarRating";
import Input from '@components/Input';
import { IMovie } from "@libs/types";

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios.get('http://localhost:3001/movie')
    const movie: IMovie[] = await res.data
    return {
      props: {
        movie,
      },
    }
  }

const trailer: NextPage<{movie: IMovie[]}> = ({movie}) => {
    return (
        <div>
            <div className="py-7 flex m-auto w-10/12 justify-between">
                <div className="mr-4">
                    <div className="mb-5">
                        <Video />
                    </div>
                    <div  className="border-b-2">
                        <h1 className="font-medium text-3xl text-gray-50">{movie[0].movie_title}</h1>
                        <p className="flex font-medium pt-4 text-gray-50">
                            <span className="mr-4">Duration: {movie[0].movie_length}</span>
                            <span className="mr-4">Gener: {movie[0].movie_gener}</span>
                            <span className="flex">
                                <AiFillStar size="1.1em" className="mr-1 mt-1 text-yellow-400" />
                                {movie[0].average_rating} ({movie[0].total_ratings})
                            </span>
                        </p>
                        <div className="flex font-medium py-2 text-gray-50">
                            Rate <span className="ml-2 mt-1"><StarRating /></span>
                        </div>
                    </div>
                    <div className="text-gray-50 py-4">
                        <label className="font-semibold text-3xl">Reviews</label>
                        <Input />
                        {movie[0].review.map(review => (
                            <Review review={review} key={review.id} />
                        ))}
                    </div>
                </div>
                <div className="w-2/5 ml-4 flex-col lg:block hidden">
                    <h2 className="text-white font-bold text-3xl">Description</h2>
                    <p className="text-white">{movie[0].movie_description}</p>
                </div>
            </div>
        </div>
    );
}
 
export default trailer;