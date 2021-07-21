
export type IMovieReview = {
  id: number
  reviewer_name: string
  reviewer_profile_picture: string
  content: string
  no_of_reacts: number
  user_react_status: boolean
}

export type IMovieReviewReply = {
  id: number
  replier_name: string
  replier_profile_picture: string
  content: string
  no_of_reacts: number
  user_react_status: boolean
}

export type IMovie = {
  id: string,
  title: string,
  description: string,
  timestamp: number,
  length: number,
  posterLink: string,
  trailerLink: string,
  noOfReviews: number,
  noOfRatings: number,
  averageRating: number,
  genres: string,
  userRating: number
}

export type Message = {
  text: string
  type: string
}

export interface IMovieShort extends Omit
  <IMovie,
    "movie_trailer_link" |
    "total_ratings" |
    "movie-gener" |
    "movie_length" |
    "Review"
  >{movie_poster: string}

export interface IMovieSearchResult extends Omit
  <IMovie, 
    "movie_length" |
    " movie_trailer_link" |
    "movie_description"|
    "Review"
  >{ movie_poster:string }