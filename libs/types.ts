
export type IMovieReview = {
  id: string
  timestamp: number
  content: string
  userObject: {
    id: string
    profilePictureLink: string
  }
  noOfLikes: number
  noOfReplies: number
  userReact: boolean
}

export type IReview = {
  id: string
  timestamp: number
  content: string
  userObject: {
    id: string
    profilePictureLink: string
  }
  noOfLikes: number
  noOfReplies: number
  userReact: boolean
  replyList: {
    id:number
    size: number
    length: number
    result: IReviewReply[]
  }
}

export type IReviewReply = {
  id: string
  timestamp: number
  content: string
  userObject: {
    id: string
    profilePictureLink: string
  }
  noOfLikes: number
  userReact: boolean
}
export type IMovieInfo = {
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
  userRating: number,
  reviewList: {
    id: number,
    size: number,
    length: number,
    result: IReview[]
  }
  wishListed: boolean,
  watchListed: boolean
}

export type IUserInfo = {
  id: string,
  userId: string,
  profilePictureLink: string,
  admin: boolean
}

export type IMovie = {
  userInfo: IUserInfo,
  movieInfo: IMovieInfo
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