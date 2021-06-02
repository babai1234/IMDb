
export type review = {
  review_id: number
  reviewer_name: string
  reviewer_profile_picture: string
  content: string
  no_of_reacts: number
  user_react_status: boolean
}

export type reply = {
  reply_id: number
  replier_name: string
  replier_profile_picture: string
  content: string
  no_of_reacts: number
  user_react_status: boolean
}

export type movie = {
  movie_id: number
  movie_title: string
  movie_length: string
  average_rating: number
  total_ratings: number
  movie_gener: string
  movie_trailer_link: string
  movie_description: string
  Review: review[]
}

export type result = {
  id: number
  movie_title: string
  movie_poster: string
  average_rating: number
  total_ratings: number
  movie_gener: string
}