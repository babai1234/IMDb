import Navbar from "@components/Navbar";
import SearchResult from "@components/SearchResult";
import { GetServerSideProps, NextPage } from "next";
import {result} from "@libs/types";
 
export const getServerSideProps : GetServerSideProps = async() => {
    const res = await fetch('http://localhost:3001/Search')
    const results: result[] = await res.json()
    return {
        props: {results}
    }
}

const SearchPage:NextPage<{results: result[]}> = ({results}) => (
    <div className="bg-black pb-4">
        <Navbar />
        {results.map(result => 
            <SearchResult result={result} key={result.id} />
            )}
    </div>
)
 
export default SearchPage;