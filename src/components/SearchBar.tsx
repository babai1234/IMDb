import { suggestion } from "@libs/types";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useRef, useState } from "react";
import {BiChevronDown, BiChevronUp, BiSearch} from 'react-icons/bi'

const SearchBar = () => {
	const router = useRouter()
  	const [query, setQuery] = useState<string>("");
	const [suggestion, setsuggestion] = useState<suggestion[]>([])
	const [displaySuggestion, setDisplaySuggestion] = useState(false)
	const [displayCategory, setDisplayCategory] = useState(false)
	const suggestionRef = useRef(null)
	// const [searchValue, setSearchValue] = useState(false)
	const [dataList, setDataList] = useState<suggestion[]>([])
	const [category, setCategory] = useState("Movie")

	// useEffect(() => {
	// 	async function getSuggestionDataList(){
	// 		const response = await fetch("http://localhost:3001/suggestion")
	// 		const data: suggestion[] = await response.json()
	// 		setDataList(data)
	// 	}
	// 	getSuggestionDataList()
	// }, [searchValue])
	useEffect(() => {
		const timer = setTimeout(async() => {
			const response = await fetch("http://localhost:3001/suggestion")
			const data: suggestion[] = await response.json()
			setDataList(data)
		}, 500);
		let matches = dataList.filter(data => {
			const regex = new RegExp(`^${query}`, "gi")
			return data.content.match(regex)
		})
		if(query.trim().length === 0){
			matches=[]
			setDisplaySuggestion(false)
		}
		setsuggestion(matches);
		// console.log(matches)
		return () => {
			clearTimeout(timer)
		}
	}, [query])
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	const handleClickOutside = (event: any) => {
		const {current: wrap} = suggestionRef
		if(wrap && !wrap.contains(event.target)){
			setDisplaySuggestion(false)
		}
	}
	const searchHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if(query.trim().length !== 0){
			router.push("/search/?q="+query)
		}
	};
	const queryChangeHandler = (event: any) => {
		setQuery(event.target.value)
		setDisplaySuggestion(true)
		// setSearchValue(true)
	}
	const suggestionClickedHandler = () => {
		setDisplaySuggestion(false)
	}
	const categorySelector = (text: string) => {
		setCategory(text)
		setDisplayCategory(false)
	}

	return (
		<div className="flex flex-col w-9/12">
			<form className="flex justify-between w-full h-8 mt-3 mb-1 bg-white rounded" onSubmit={searchHandler}>
				<div className="flex flex-col">
					<div className="flex justify-between h-full border-r-2 border-gray-200 text-black w-24 p-1">
						<span className="font-semibold">{category}</span>
						{
							displayCategory 
							?
							<BiChevronUp className="h-6 w-6 cursor-pointer hover:bg-gray-200 rounded-full" onClick={() => setDisplayCategory(false)} />
							:
							<BiChevronDown className="h-6 w-6 cursor-pointer hover:bg-gray-200 rounded-full" onClick={() => setDisplayCategory(true)} />
						}
					</div>
					{displayCategory ? 
						(<div className="bg-white text-black z-10 mt-1 mr-1 rounded">
							<ul className="p-1">
								<li className="list-none cursor-pointer hover:bg-gray-100" onClick={() => categorySelector("Movie")}>
									<span className="font-semibold">Movie</span>
								</li>
								<li className="list-none cursor-pointer hover:bg-gray-100" onClick={() => categorySelector("Profile")}>
									<span className="font-semibold">Profile</span>
								</li>
							</ul>
						</div>)
						:
						null
					}
				</div>
				<input
					type="text"
					placeholder="Search"
					value={query}
					onChange={queryChangeHandler}
					className="w-full h-full outline-none text-black px-1 font-semibold"  
				/>
				<BiSearch className="cursor-pointer h-6 w-6 m-1 text-black" />
			</form>
			{!displaySuggestion
			? null
			:
			(
			<div className="bg-white ml-24 z-10 rounded" ref={suggestionRef}>
				{
				suggestion.map(suggest => (
					<p 
					className="text-black p-2 hover:bg-gray-100 cursor-pointer font-medium"
					tabIndex={0}
					key={suggest.id}
					onClick={() => {setQuery(suggest.content); suggestionClickedHandler}}
					>
						{suggest.content}
					</p>
				))
				}
			</div>
			)}
		</div>
	);
};

export default SearchBar;
