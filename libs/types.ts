
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
  movie_id: number
  movie_title: string
  movie_length: string
  average_rating: number
  total_ratings: number
  movie_gener: string
  movie_trailer_link: string
  movie_description: string
  Review: IMovieReview[]
} 

// export type IResult = {
//   id: number
//   movie_title: string
//   movie_poster: string
//   average_rating: number
//   total_ratings: number
//   movie_gener: string
// }

export interface IMovieSearchResult extends Omit<IMovie, "movie_length" |" movie_trailer_link" |"movie_description"|"Review"> {
  movie_poster:string
}