import { GetServerSideProps, NextPage } from "next";
import axios from "axios";

import MovieCard from "@components/MovieCard";
import {IMovieSearchResult} from "@libs/types";
 
export const getServerSideProps : GetServerSideProps = async(context) => {
    const query: string | string[] = Object.values(context.query)[0]
    console.log(query);
    const response = await axios.get('http://localhost:3001/Search')
    const movies: IMovieSearchResult[] = await response.data
    return {
        props: {movies}
    }
}

const search:NextPage<{movies: IMovieSearchResult[]}> = ({movies}) => (
    <div className="p-8 bg-black">
        {movies.map(result => 
            <MovieCard result={result} key={result.movie_id} />
            )}
    </div>
)
 
export default search;