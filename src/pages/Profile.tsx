import React from "react";
import { Button } from "react-bootstrap";
import Carousels from "@components/MovieShort";
// import Footer from "@components/Footer";

const profile = () => {

     const followUser = async()=>{
        const response = await fetch("http://localhost:8082/user/followrequest?target_user_id=Swarnendu Chatterjee",{
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
                "u_id": localStorage.getItem("UserId"),
                "Authorization": localStorage.getItem("Token")
            }
        })
        const data = await response.json()
        console.log(data);
    }
    return (
        <>
            <main className="items-center text-white bg-gray-700 align-center bg-opacity-10 profile-page">
                <div className="mb-8 lg:w-8/12 lg:mx-auto ">
                    <header className="flex flex-wrap items-center p-4 md:py-8">
                        <div className="md:w-3/12 md:ml-16">
                            <img className="object-cover w-20 h-20 p-1 border-2 border-pink-600 rounded-full md:w-40 md:h-40" src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="profile" />
                        </div>
                        <div className="w-8/12 ml-4 md:w-7/12">
                            <div className="mb-4 md:flex md:flex-wrap md:items-center">
                                <h2 className="inline-block mb-2 text-3xl font-light md:mr-2 sm:mb-0">#subrata_kolay</h2>
                                <button onClick={followUser}>
                                <a href="#" className="block px-2 py-1 text-sm font-semibold text-center text-white bg-blue-500 rounded sm:inline-block">Follow</a>
                                </button>
                            </div>
                            <ul className="hidden mb-4 space-x-8 md:flex">
                                <li>
                                    <span className="font-semibold">136</span>
                                    reviews
                                </li>
                                <li>
                                    <span className="font-semibold">40.5k</span>
                                    followers
                                </li>
                                <li>
                                    <span className="font-semibold">302</span>
                                    following
                                </li>
                            </ul>
                            <div className="hidden md:block">
                                <h1 className="font-semibold">Mr MovieReviewer...</h1>
                                <span>#It's all about movies,web-series</span>
                                <p>@with me let's see the amazing movies</p>
                            </div>
                        </div>
                    </header>
                </div>
                <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
            </main>
            {/* Finish this. Create sample data in data base fetch the data and map into the component */}
            {/* <div className="justify-center profile-container">
                <div className="mt-3 row">
                    <div className="col">
                        <p className="h-5 px-2 text-2xl text-white text-padding font-weight-bold">From Your WishList </p>
                        <div className="flex flex-row gap-3 mt-3 rounded-md row">
                            <Carousels />
                        </div>
                    </div>
                </div>
                <div className="mt-3 row">
                    <div className="">
                        <p className="h-6 text-2xl text-white text-padding font-weight-bold">Rated Movies </p>
                        <div className="flex flex-row gap-2 mt-3 rounded-md row">
                            <Carousels />
                        </div>
                    </div>
                </div>

            </div> */}
            {/* <Footer /> */}

        </>
    );
}

export default profile;



