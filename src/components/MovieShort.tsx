import React from "react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import  { useContext } from 'react'

import { IMovieShort } from "@libs/types";
import { AuthContext } from "src/Context/auth.context";

const MovieShort: FunctionComponent<{movie: IMovieShort}> = ({movie}) => {
    const router = useRouter()
    const {isAuthenticated} = useContext(AuthContext)
    const routeHandler = () => {
        console.log("MovieShort",isAuthenticated);        
        if(isAuthenticated)
            router.push('movie/' + movie.id)
        else
            alert("Please SignIn to continue")
    }

    return (
        <div onClick={routeHandler}>
            <div className="gap-2 px-1 py-3 card image-container cursor" >
                <div className="img-container cursor-pointer">
                    <img className="rounded-lg img-fluid" src={movie.movie_poster} alt={movie.movie_title}></img>
                </div>
                <div className="mt-3 ">
                    <p className="justify-end font-bold">{movie.movie_title}</p>
                    <div className="flex justify-evenly">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="gap-2 ipc-icon ipc-icon--star-inline cursor-pointer" viewBox="0 0 24 24" fill="yellow" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                        <span>{movie.average_rating}</span>
                        <Link href="/Rate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="gap-2 ipc-icon ipc-icon--star-border-inline cursor-pointer" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path></svg>
                        </Link>
                    </div>
                    {/* 
                    <ReactStars
                        count={movie.average_rating}
                        size={20}
                        color1={"#f4c10f"}
                    ></ReactStars> */}
                    <button
                        type="button"
                        className="w-32 mx-auto mb-5 border-2 border-gray-300 rounded-md focus:outline-none hover:bg-yellow-400"
                    >
                        WatchList
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieShort;


