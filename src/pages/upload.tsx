import { FormEvent, useState } from "react";

import DropZoneComponent from "@components/DropZoneComponent";

const upload = () => {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState(null);
  const [length, setLength] = useState("");
  const [gener, setGener] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [description, setDescription] = useState("");
  const postMovieHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      title: title,
      poster: poster,
      length: length,
      genres: gener,
      trailer: trailer,
      description: description,
    };
    const formData = new FormData()
    Object.keys(data).forEach(key => formData.append(key, data[key]))
    const response = await fetch("http://localhost:8082/movie/upload",{
      method: "POST",
      headers: {
        "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbnVzZXIyMTM1MyIsInBhc3N3b3JkIjoiJDJhJDEwJDhCcFZyZkdqNE9LdkRXT3VVR1hTcnUxcm1xVC92elhYc085NDBoTGE0SmJIZTFFNk9kU3h1IiwiYWN0aXZlIjp0cnVlLCJleHAiOjE2MjgxMDM0OTgsImlhdCI6MTYyODA4MzQ5OH0.615iFExhnvL_FZ3M1zY_UPVZnuGTQFskPAzIBwOhgAI",
        "u_id": "adminuser21353"
      },
      body: formData
    })
    console.log(response);
    
    const res = await response.json()
    console.log(res)
    // Object.keys(data).forEach(key => console.log(key,formData.get(key)))
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
