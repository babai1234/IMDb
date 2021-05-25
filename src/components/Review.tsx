import Image from 'next/image';
import {HiOutlineThumbUp, HiThumbUp} from 'react-icons/hi'
import {FunctionComponent, useState} from 'react'
import {useRouter} from "next/router"
import Input from './Input';
import { review } from '@libs/types';

const Review: FunctionComponent<{review: review}> = ({review}) => {

    const [like, setLike] = useState(0)
    const [flag, setFlag] = useState(0)
    const router = useRouter();
    const Like = <HiOutlineThumbUp onClick={()=>setLike(1)} size="1.3em" className="mx-3.5 cursor-pointer" />
    const unLike = <HiThumbUp onClick={()=>setLike(0)} size="1.3em" className="mx-3.5 cursor-pointer" />
    const go = () =>{
        const url = router.pathname
        if(url.includes('/Reply')){
            if(flag === 1){
                setFlag(0)
            }
            else{
                setFlag(1)
            }
        }
        else{
            setFlag(0)
            router.push('/Reply')
        }
    }
    console.log({review})
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
                    {like ? unLike : Like}
                    <span>{like ? like : null}</span>
                    <span className="mx-4 cursor-pointer" onClick={go}>Reply</span>
                </div>
                {flag ? <Input /> : null }
            </div>
        </div>
    );
}
 
export default Review;
