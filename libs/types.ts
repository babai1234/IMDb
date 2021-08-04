
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
  avgRating: number,
  genres: string,
  userRating: number
}

export type QueryParams = {
  params: string
}

export type suggestion = {
  id: string
  content: string
}

export type Message = {
  text: string
  type: string
}

export interface IMovieShort extends Omit
  <IMovie,
    "trailerLink" |
    "noOfRatings" |
    "genres" |
    "length" |
    "noOfReviews" |
    "geners" |
    "userRating" |
    "timestamp" |
    "description"
  >{posterLink: string}

export interface IMovieSearchResult extends Omit
  <IMovie, 
    "length" |
    "trailerLink" |
    "description"|
    "timestamp"|
    "userRating"|
    "noOfReviews"
  >{ posterLink:string }