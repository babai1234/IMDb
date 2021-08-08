import { FormEvent, useState } from "react";

import DropZoneComponent from "@components/DropZoneComponent";
import { useRouter } from "next/router";

const upload = () => {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState(null);
  const [length, setLength] = useState("");
  const [gener, setGener] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [description, setDescription] = useState("");
  const router = useRouter()
  const postMovieHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      title: title,
      poster: poster,
      length: parseInt(length),
      genres: gener,
      trailer: trailer,
      description: description,
    };
    const formData = new FormData()
    Object.keys(data).forEach(key => formData.append(key, data[key]))
    const response = await fetch("http://localhost:8082/movie/upload",{
      method: "POST",
      headers: {
        "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbnVzZXIyMTM1MyIsInBhc3N3b3JkIjoiJDJhJDEwJEVLUjFZcS41cGVYOENBY2JZekFtWE9GVmVocW5oUVJTZmVuS2dhdTNCellzYUNZc0ZEVXcuIiwiYWN0aXZlIjp0cnVlLCJleHAiOjE2Mjg0MzEwNTIsImlhdCI6MTYyODQxMTA1Mn0.3b_wNLK2a6toMffeEBSZfWIp_4AzfK9ErOyWJ1xpA6A",
        "u_id": "adminuser21353"
      },
      body: formData
    })
    const res = await response.json()
    console.log(res)
    router.push(`movie/${res.id}`)
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <form
        action="submit"
        onSubmit={(event) => postMovieHandler(event)}
        className="grid justify-around w-8/12 grid-cols-2 gap-8 text-white"
      >
        <div className="flex flex-col col-span-2 md:col-span-1">
          <input
            required
            type="text"
            name="Title"
            id="movie_title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Movie Title"
            className="px-2 py-1 my-4 bg-transparent border-2 border-gray-500 rounded-lg outline-none"
          />

          <input
            required
            type="text"
            name="Length"
            id="movie_length"
            value={length}
            onChange={(event) => setLength(event.target.value)}
            placeholder="Movie Length"
            className="px-2 py-1 my-4 bg-transparent border-2 border-gray-500 rounded-lg outline-none"
          />
          <input
            required
            type="text"
            name="Gener"
            id="Movie_gener"
            value={gener}
            onChange={(event) => setGener(event.target.value)}
            placeholder="Movie Gener"
            className="px-2 py-1 my-4 bg-transparent border-2 border-gray-500 rounded-lg outline-none"
          />

          <textarea
            required
            name="Descrpition"
            id="movie_description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Movie Description"
            cols={30}
            rows={5}
            className="px-2 py-1 my-4 bg-transparent border-2 border-gray-500 rounded-lg outline-none"
          />
          <button
            type="submit"
            className="py-2 bg-blue-600 rounded-md outline-none text-gray-50"
          >
            Upload
          </button>
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1">
          <DropZoneComponent type="image/*" title="Image" setFile={setPoster} />
          <p>{poster?.name}</p>
          <DropZoneComponent type="video/*" title="Video" setFile={setTrailer} />
          <p>{trailer?.name}</p>
        </div>
      </form>
    </div>
  );
};

export default upload;
