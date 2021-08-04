import {AiFillStar} from 'react-icons/ai'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { FunctionComponent } from 'react'
import { IMovieSearchResult } from '@libs/types'

const MovieCard: FunctionComponent<{result: IMovieSearchResult}> = ({result: {averageRating,genres,id,title,noOfRatings,posterLink}}) => {

    const Router = useRouter()
    const loadTrailer = () => {
        Router.push(`Movie/${id}`)
    }
    
    return (
        <div onClick={loadTrailer} className="movie">
            <div className="mt-2 ml-10">
                <Image src={posterLink} alt="Movie Poster" width={100} height={120} />
            </div>
            <div className="flex flex-col my-4 ml-8">
                <p className="text-4xl font-bold">{title}</p>
                <div className="flex flex-row mt-8 text-lg">
                    <p className="mr-20">Gener: {genres}</p>
                    <span className="flex">
                        Rating: {averageRating}
                        <AiFillStar size="1.1em" className="mt-1 ml-1 text-yellow-400" />
                        ({noOfRatings})
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;