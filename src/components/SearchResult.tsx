import {AiFillStar} from 'react-icons/ai'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { FunctionComponent } from 'react'
import { result } from '@libs/types'

const SearchResult: FunctionComponent<{result: result}> = ({result}) => {

    const Router = useRouter()
    const loadTrailer = () => {
        Router.push("Movie/"+result.id)
    }
    
    return (
        <div onClick={loadTrailer} className="w-3/4 flex flex-row bg-gray-900 text-gray-50 mx-auto mt-4 rounded-md hover:opacity-75 cursor-pointer transition ease-in duration-300">
            <div className="ml-10 mt-2">
                <Image src={result.movie_poster} alt="Movie Poster" width={100} height={120} />
            </div>
            <div className="flex flex-col ml-8 my-4">
                <p className="text-4xl font-bold">{result.movie_title}</p>
                <div className="flex flex-row text-lg mt-8">
                    <p className="mr-20">Gener: {result.movie_gener}</p>
                    <span className="flex">
                        Rating: {result.average_rating}
                        <AiFillStar size="1.1em" className="text-yellow-400 mt-1 ml-1" />
                        ({result.total_ratings})
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;