import {AiFillStar} from 'react-icons/ai'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { FunctionComponent } from 'react'
import { IMovieSearchResult } from '@libs/types'

const MovieCard: FunctionComponent<{result: IMovieSearchResult}> = ({result:{average_rating,movie_gener,movie_id,movie_title,total_ratings,movie_poster}}) => {

    const Router = useRouter()
    const loadTrailer = () => {
        Router.push(`Movie/${movie_id}`)
    }
    
    return (
        <div onClick={loadTrailer} className="movie">
            <div className="mt-2 ml-10">
                <Image src={movie_poster} alt="Movie Poster" width={100} height={120} />
            </div>
            <div className="flex flex-col my-4 ml-8">
                <p className="text-4xl font-bold">{movie_title}</p>
                <div className="flex flex-row mt-8 text-lg">
                    <p className="mr-20">Gener: {movie_gener}</p>
                    <span className="flex">
                        Rating: {average_rating}
                        <AiFillStar size="1.1em" className="mt-1 ml-1 text-yellow-400" />
                        ({total_ratings})
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;