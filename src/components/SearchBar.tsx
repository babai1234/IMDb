import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import {BiSearch} from 'react-icons/bi'

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter()

  const searchHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push("/search/?q="+query)
  };

  return (
    <form className="flex justify-between w-9/12 h-8 px-2 m-3 bg-white rounded" onSubmit={(event) => searchHandler(event)}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-full h-8 outline-none"
      />
      <BiSearch className="cursor-pointer h-6 w-6 mt-1 text-black" />
    </form>
  );
};

export default SearchBar;
