import Image from 'next/image';
import {HiOutlineThumbUp, HiThumbUp} from 'react-icons/hi'
import {FaTimes} from 'react-icons/fa'
import {FunctionComponent, useState} from 'react'
import Input from './Input';
import { IMovieReviewReply } from '@libs/types';

const Reply: FunctionComponent<{reply: IMovieReviewReply}> = ({reply}) => {

    const [like, setLike] = useState(reply.no_of_reacts)
    const [flag, setFlag] = useState(0)
    const Like = <HiThumbUp onClick={()=>{setLike(like + 1); reply.user_react_status=true}} size="1.3em" className="mx-3.5 cursor-pointer" />
    const unLike = <HiOutlineThumbUp onClick={()=>{setLike(like - 1); reply.user_react_status=false}} size="1.3em" className="mx-3.5 cursor-pointer" />
    const cross = <FaTimes className="cursor-pointer mt-1 h-4 w-4" />
    console.log("Reply" + reply.user_react_status);
    
    const input_box = () =>{
        if(flag === 1){
            setFlag(0)
        }
        else{
            setFlag(1)
        }
    }
    return (
        <div className="py-4 flex text-gray-50">
            <div className="flex-shrink-0">
                <Image src={reply.replier_profile_picture} width="40" height="40" className="rounded-full"/>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-l ml-4">{reply.replier_name}</p>
                <div className="ml-4">
                    <p className="mt-1">
                        {reply.content}
                    </p>
                </div>
                <div className="flex mt-2">
                    {!reply.user_react_status ? Like : unLike}
                    <span>{like ? like : null}</span>
                    <span className="mx-4 cursor-pointer" onClick={input_box}>{flag ? cross : "Reply"}</span>
                </div>
                {flag ? <Input /> : null }
            </div>
        </div>
    );
}
 
export default Reply;
