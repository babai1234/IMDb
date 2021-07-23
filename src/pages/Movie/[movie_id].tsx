import {AiFillStar} from 'react-icons/ai'
import { GetServerSideProps, NextPage } from 'next'

import Video from "@components/Video";
import Review from "@components/Review";
import StarRating from "@components/StarRating";
import Input from '@components/Input';
import { IMovie } from "@libs/types";

// "u_id": localStorage.getItem("UserId"),
// "Authorization": localStorage.getItem("Token")

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('http://localhost:8082/movie/info?movieId=Movie@1626801763870',{
        method:"GET",
        headers:{
            "Content-Type": "application/JSON",
        }
    })
    const movie: IMovie = await res.json()
    
    return {
      props: {
        movie,
      },
    }
  }

const trailer: NextPage<{movie: IMovie}> = ({movie}) => {
    return (
        <div>
            <div className="py-7 flex m-auto w-10/12 justify-between">
                <div className="mr-4">
                    <div className="mb-5">
                        <Video trailerLink={movie.trailerLink} />
                    </div>
                    <div  className="border-b-2">
                        <h1 className="font-medium text-3xl text-gray-50">{movie.title}</h1>
                        <p className="flex font-medium pt-4 text-gray-50">
                            <span className="mr-4">Duration: {movie.length}</span>
                            <span className="mr-4">Gener: {movie.genres}</span>
                            <span className="flex">
                                <AiFillStar size="1.1em" className="mr-1 mt-1 text-yellow-400" />
                                {movie.averageRating} ({movie.noOfRatings})
                            </span>
                        </p>
                        <div className="flex font-medium py-2 text-gray-50">
                            Rate <span className="ml-2 mt-1"><StarRating /></span>
                        </div>
                    </div>
                    <div className="text-gray-50 py-4">
                        <label className="font-semibold text-3xl">Reviews<span className="text-lg">({movie.noOfReviews})</span> </label>
                        <Input />
                        {/* {movie.review.map(review => (
                            <Review review={review} key={review.id} />
                        ))} */}
                    </div>
                </div>
                <div className="w-2/5 ml-4 flex-col lg:block hidden">
                    <h2 className="text-white font-bold text-3xl">Description</h2>
                    <p className="text-white">{movie.description}</p>
                </div>
            </div>
        </div>
    );
}
 
export default trailer;