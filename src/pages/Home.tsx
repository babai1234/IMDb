import Head from "next/head";
import React from "react";
import Navbar from '../components/Navbar';
import Carousels from "../components/Carousels";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Imdb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="justify-center home-container">
        <div className="mt-3 row">
          <div className="col">
            <p className="h-5 px-2 text-2xl text-white text-padding font-weight-bold">TRENDING </p>
            <p className="h-1 px-2 py-2">today's Tv shows and Movies</p>
            {/* <p className="">Get more recommendation</p> */}
            <div className="flex flex-row gap-3 mt-3 rounded-md row">
              <Carousels />
            </div>
          </div>
        </div>
        <div className="mt-3 row">
          <div className="">
            <p className="h-6 px-2 text-2xl text-white text-padding font-weight-bold">TOP RATED MOVIES </p>
            <p className="h-1 px-2 py-2">Tv shows and Movies only for you</p>
            <div className="flex flex-row gap-2 mt-3 rounded-md row">
              <Carousels />
            </div>
          </div>
        </div>
        <div className="mt-3 row">
          <div className="">
            <p className="h-6 px-2 text-2xl text-white text-padding font-weight-bold">From Your WatchList</p>
            <div className="flex flex-row gap-2 mt-3 rounded-md row">
              <Carousels />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div >
  );
}




