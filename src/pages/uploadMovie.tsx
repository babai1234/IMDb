import DropZoneComponent from '@components/DropZoneComponent'
import {FormEvent, useState} from 'react' 


const upload = () => {

    const [title, setTitle] = useState("")
    const [poster, setPoster] = useState(null)
    const [length, setLength] = useState("")
    const [gener, setGener] = useState("")
    const [trailer, setTrailer] = useState(null)
    const [description, setDescription] = useState("")
    const postMovie = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data= {
            movie_title: title,
            movie_poster: poster,
            movie_length: length,
            movie_gener: gener,
            movie_trailer: trailer,
            movie_description: description
        }
        const response = await fetch('http://localhost:3001/Upload',{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log(response)
    }

    return (
        <div className="bg-black h-screen flex items-center justify-center">
            <form action="submit" onSubmit={event => postMovie(event)} className="text-white flex justify-around w-8/12">
                <div className="flex flex-col w-6/12">
                    <input
                        required
                        type="text" 
                        name="Title" 
                        id="movie_title"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        placeholder="Movie Title" 
                        className="bg-transparent py-1 px-2 my-4 outline-none border-2 border-gray-500 rounded-lg" />
                    
                    <input
                        required
                        type="text" 
                        name="Length" 
                        id="movie_length"
                        value={length}
                        onChange={event => setLength(event.target.value)}
                        placeholder="Movie Length" 
                        className="bg-transparent py-1 px-2 my-4 outline-none border-2 border-gray-500 rounded-lg" />
                    <input
                        required
                        type="text" 
                        name="Gener" 
                        id="Movie_gener"
                        value={gener}
                        onChange={event => setGener(event.target.value)} 
                        placeholder="Movie Gener" 
                        className="bg-transparent py-1 px-2 my-4 outline-none border-2 border-gray-500 rounded-lg" />
                    
                    <textarea
                        required
                        name="Descrpition" 
                        id="movie_description"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        placeholder="Movie Description" 
                        cols={30} 
                        rows={5} 
                        className="bg-transparent py-1 px-2 my-4 outline-none border-2 border-gray-500 rounded-lg" />
                    <button 
                        type="submit"
                        className="bg-blue-600 text-gray-50 outline-none rounded-md py-2">Upload
                    </button>
                </div>
                <div className="flex flex-col">
                    <DropZoneComponent type="image/*" title="Image" setFile={setPoster} />
                    <div><p className="break-all">{poster?.name}</p></div>
                    <DropZoneComponent type="video/*" title="Video" setFile={setTrailer} />
                    <div><p className="break-all">{trailer?.name}</p></div>
                </div>
            </form>
        </div>
    );
}
 
export default upload;