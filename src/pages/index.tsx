import Head from "next/head";
import React from "react";
import { GetServerSideProps, NextPage } from 'next'
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { IMovieShort } from "@libs/types";
import MovieShort from "@components/MovieShort";
// import Footer from "../components/Footer";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get('http://localhost:3001/movie_short')
  const movieShort: IMovieShort[] = await response.data;
  return {
    props: {
      movieShort
    }
  }
}

const Home: NextPage<{movieShort: IMovieShort[]}> = ({movieShort}) => {
  return (
    <div>
      <Head>
        <title>Imdb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="justify-center home-container">
        <div className="mt-3 row">
          <div className="col">
            <p className="h-5 px-2 text-2xl text-white text-padding font-weight-bold">TRENDING </p>
            <p className="h-1 px-2 py-2">today's Tv shows and Movies</p>
            {/* <p className="">Get more recommendation</p> */}
            <div className="flex flex-row gap-3 mt-3 rounded-md row">
              <Carousel
                additionalTransfrom={0}
                arrows
                centerMode
                containerClass="container"
                draggable
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                responsive={{
                    desktop: {
                        breakpoint: { max: 1920, min: 1024 },
                        items: 5,
                        paritialVisibilityGutter: 50
                    },
                    tablet: {
                        breakpoint: { max: 720, min: 240 },
                        items: 2,
                        paritialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={5}
                swipeable
              > 
                {movieShort.map(movie => (
                  <MovieShort movie = {movie} key = {movie.id} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="mt-3 row">
          <div className="">
            <p className="h-6 px-2 text-2xl text-white text-padding font-weight-bold">TOP RATED MOVIES </p>
            <p className="h-1 px-2 py-2">Tv shows and Movies only for you</p>
            <div className="flex flex-row gap-2 mt-3 rounded-md row">
            <Carousel
                additionalTransfrom={0}
                arrows
                centerMode
                containerClass="container"
                draggable
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                responsive={{
                    desktop: {
                        breakpoint: { max: 1920, min: 1024 },
                        items: 5,
                        paritialVisibilityGutter: 50
                    },
                    tablet: {
                        breakpoint: { max: 720, min: 240 },
                        items: 2,
                        paritialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={5}
                swipeable
              > 
                {movieShort.map(movie => (
                  <MovieShort movie = {movie} key = {movie.id} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="mt-3 row">
          <div className="">
            <p className="h-6 px-2 text-2xl text-white text-padding font-weight-bold">From Your WatchList</p>
            <div className="flex flex-row gap-2 mt-3 rounded-md row">
            <Carousel
                additionalTransfrom={0}
                arrows
                centerMode
                containerClass="container"
                draggable
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                responsive={{
                    desktop: {
                        breakpoint: { max: 1920, min: 1024 },
                        items: 5,
                        paritialVisibilityGutter: 50
                    },
                    tablet: {
                        breakpoint: { max: 720, min: 240 },
                        items: 2,
                        paritialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={5}
                swipeable
              > 
                {movieShort.map(movie => (
                  <MovieShort movie = {movie} key = {movie.id} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div >
  );
}

export default Home;