import {AiFillStar} from 'react-icons/ai'
import { GetServerSideProps, NextPage } from 'next'

import Video from "@components/Video";
import Review from "@components/Review";
import StarRating from "@components/StarRating";
import Input from '@components/Input';
import { IMovie, IMovieReview } from "@libs/types";
import { BiPlus } from 'react-icons/bi';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {movie_id} = context.params
    const [Movie, Review] = await Promise.all([
        fetch('http://localhost:8082/movie/info?movieId='+movie_id,{
            method:"GET",
            headers:{
                "u_id": localStorage.getItem("UserId"),
                "Authorization": localStorage.getItem("Token")
            }
        })
            .then(res => res.json())
            .catch(err => console.log(err.message)),
        fetch('http://localhost:8082/movie/review?movieId='+movie_id,{
            method:"GET",
            headers:{
                "u_id": localStorage.getItem("UserId"),
                "Authorization": localStorage.getItem("Token")
            }
        })
            .then(res => res.json())
            .catch(err => console.log(err.message))
    ])
    
    return {
      props: {
        movie: Movie.movieInfo,
        review: Review.result
      },
    }
  }

const trailer: NextPage<{movie: IMovie, review: IMovieReview[]}> = ({movie, review}) => {


    const addToWishListHandler = async() => {
        const response = await fetch(`http://localhost:8082/user/wishlist?movieId=${movie.id}`,{
            method: "PUT",
            headers:{
                "Authorization": localStorage.getItem("Token"),
                "u_id": localStorage.getItem("UserId")
            }
        })
        console.log(response);
        const res = await response.json()
        console.log(res);
    }
    const addToWatchListHandler = async() => {
        const response = await fetch(`http://localhost:8082/user/watchlist?movieId=${movie.id}`,{
            method: "PUT",
            headers:{
                "Authorization": localStorage.getItem("Token"),
                "u_id": localStorage.getItem("UserId")
            }
        })
        console.log(response);
        const res = await response.json()
        console.log(res);
    }
    const postReviewHandler = async(review: string) => {
        const response = await fetch(`http://localhost:8082/movie/review?movieId=${movie.id}`,{
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
                "Authorization": localStorage.getItem("Token"),
                "u_id": localStorage.getItem("UserID")
            },
            body: JSON.stringify({content: review})
        })
        console.log(response)
        const res = await response.json()
        console.log(res)
    }

    console.log(movie);
    
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
                            <span className="flex mr-4">
                                <AiFillStar size="1.1em" className="mr-1 mt-1 text-yellow-400" />
                                {movie.avgRating} ({movie.noOfRatings})
                            </span>
                            <span className="mr-4">
                                <button onClick={addToWatchListHandler} className="bg-blue-600 text-gray-50 outline-none rounded-md py-1 px-5 flex">
                                    <BiPlus className="mt-1" /> WatchList
                                </button>
                            </span>
                            <span>
                                <button onClick={addToWishListHandler} className="bg-blue-600 text-gray-50 outline-none rounded-md py-1 px-5 flex">
                                    <BiPlus className="mt-1" /> WishList
                                </button>
                            </span>
                        </p>
                        <div className="flex font-medium py-2 text-gray-50">
                            Rate <span className="ml-2 mt-1"><StarRating userRating={movie.userRating} /></span>
                        </div>
                    </div>
                    <div className="text-gray-50 py-4">
                        <label className="font-semibold text-3xl">Reviews<span className="text-lg">({movie.noOfReviews})</span> </label>
                        <Input postData={postReviewHandler}/>
                        {review.map(review => (
                            <Review review={review} key={review.id} />
                        ))}
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