import Image from 'next/image';
import {HiOutlineThumbUp, HiThumbUp} from 'react-icons/hi'
import {FunctionComponent, useState} from 'react'
import { useRouter } from 'next/router';

import { IMovieReview } from '@libs/types';

const Review: FunctionComponent<{review: IMovieReview}> = ({review}) => {

    const [like, setLike] = useState(review.noOfLikes)
    const router = useRouter()
    
    const reactStateHandler = async(type: string) => {
        if(type === 'Like'){
            setLike(like + 1)
            review.userReact=true
        }
        else{
            setLike(like - 1)
            review.userReact=false
        }
        const response = await fetch('http://localhost/8082/movie/review/react?reviewId='+review.id,{
            method:'PUT',
            headers:{
                "u_id": localStorage.getItem('UserId'),
                'Authorization': localStorage.getItem('Token')
            }
        })
        const res = await response.json()
        console.log(res);
    }
    const Like = <HiOutlineThumbUp 
                    onClick={()=>{ reactStateHandler("Like") }} 
                    size="1.3em" 
                    className="mx-3.5 cursor-pointer" 
                 />
    const unLike = <HiThumbUp 
                        onClick={()=>{ reactStateHandler("Unlike") }} 
                        size="1.3em" 
                        className="mx-3.5 cursor-pointer" 
                    />
    const replyStateHandler = () => {
        if(router.pathname.includes("/reviews")){
            return
        }
        else{
            router.push(`reviews/${review.id}`)
        }
    }
    return (
        <div className="py-4 flex text-gray-50">
            <div className="flex-shrink-0">
                <Image src={review.userObject.profilePictureLink} width="40" height="40" className="rounded-full"/>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-l ml-4">{review.userObject.id}</p>
                <div className="ml-4">
                    <p className="mt-1">
                        {review.content}
                    </p>
                </div>
                <div className="flex mt-2">
                    {!review.userReact ? Like : unLike}
                    <span>{like ? like : null}</span>
                    <span className="mx-4 cursor-pointer" onClick={replyStateHandler}>Reply</span>
                </div>
            </div>
        </div>
    );
}
 
export default Review;
