import Image from 'next/image';
import {HiOutlineThumbUp, HiThumbUp} from 'react-icons/hi'
import {FunctionComponent, useState} from 'react'
import {useRouter} from "next/router"
import Input from './Input';
import { review } from '@libs/types';
import Link from 'next/link';

const Review: FunctionComponent<{review: review}> = ({review}) => {

    const [like, setLike] = useState(review.no_of_reacts)
    const [flag, setFlag] = useState(0)
    const router = useRouter();
    const Like = <HiOutlineThumbUp onClick={()=>{setLike(like + 1); review.user_react_status=true}} size="1.3em" className="mx-3.5 cursor-pointer" />
    const unLike = <HiThumbUp onClick={()=>{setLike(like - 1); review.user_react_status=false}} size="1.3em" className="mx-3.5 cursor-pointer" />
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
                    <Link href={`/Movie/Review/${review.review_id}`}>
                        <span className="mx-4 cursor-pointer">Reply</span>
                    </Link>
                </div>
                {flag ? <Input /> : null }
            </div>
        </div>
    );
}
 
export default Review;
