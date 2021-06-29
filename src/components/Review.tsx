import Image from 'next/image';
import {HiOutlineThumbUp, HiThumbUp} from 'react-icons/hi'
import {FunctionComponent, useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import { useRouter } from 'next/router';

import { IMovieReview } from '@libs/types';
import Input from './Input';

const Review: FunctionComponent<{review: IMovieReview}> = ({review}) => {

    const [like, setLike] = useState(review.no_of_reacts)
    const [flag, setFlag] = useState(0)
    const Like = <HiOutlineThumbUp onClick={()=>{setLike(like + 1); review.user_react_status=true}} size="1.3em" className="mx-3.5 cursor-pointer" />
    const unLike = <HiThumbUp onClick={()=>{setLike(like - 1); review.user_react_status=false}} size="1.3em" className="mx-3.5 cursor-pointer" />
    const cross = <FaTimes className="cursor-pointer mt-1 h-4 w-4" />
    const router = useRouter()
    const replyHandler = () => {
        if(router.pathname.includes("/reviews")){
            if(flag === 1){
                setFlag(0)
            }
            else{
                setFlag(1)
            }
        }
        else{
            router.push(`reviews/${review.id}`)
        }
    }
    return (
        <div className="py-4 flex text-gray-50">
            <div className="flex-shrink-0">
                <Image src={review.reviewer_profile_picture} width="40" height="40" className="rounded-full"/>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-l ml-4">{review.reviewer_name}</p>
                <div className="ml-4">
                    <p className="mt-1">
                        {review.content}
                    </p>
                </div>
                <div className="flex mt-2">
                    {!review.user_react_status ? Like : unLike}
                    <span>{like ? like : null}</span>
                    <span className="mx-4 cursor-pointer" onClick={replyHandler}>{flag ? cross : "Reply"}</span>
                </div>
                {flag ? <Input /> : null }
            </div>
        </div>
    );
}
 
export default Review;
