import Image from 'next/image';
import {HiOutlineThumbUp, HiThumbUp} from 'react-icons/hi'
import {FunctionComponent, useState} from 'react'
import { IReviewReply } from '@libs/types';

const Reply: FunctionComponent<{reply: IReviewReply}> = ({reply}) => {
    console.log(reply);
    const [like, setLike] = useState(reply.noOfLikes)
    const Like = <HiOutlineThumbUp 
                    onClick={()=>{reactStateHandler('Like')}} 
                    size="1.3em" 
                    className="mx-3.5 cursor-pointer" 
                />
    const unLike = <HiThumbUp 
                    onClick={()=>{reactStateHandler('Unlike')}} 
                    size="1.3em" 
                    className="mx-3.5 cursor-pointer" 
                    />
    
    const reactStateHandler = async(type: string) => {
        if(type === 'Like'){
            setLike(like + 1)
            reply.userReact=true
        }
        else{
            setLike(like - 1)
            reply.userReact=false
        }
        const response = await fetch('http://localhost/8082/movie/reply/react?replyId='+reply.id,{
            method:'PUT',
            headers:{
                "u_id": localStorage.getItem('UserId'),
                'Authorization': localStorage.getItem('Token')
            }
        })
        const res = await response.json()
        console.log(res);
    }
    return (
        <div className="py-4 flex text-gray-50">
            <div className="flex-shrink-0">
                <Image 
                    src={reply.userObject.profilePictureLink} 
                    width="40" 
                    height="40" 
                    className="rounded-full"
                />
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-l ml-4">
                    {reply.userObject.id}
                </p>
                <div className="ml-4">
                    <p className="mt-1">
                        {reply.content}
                    </p>
                </div>
                <div className="flex mt-2">
                    {!reply.userReact ? Like : unLike}
                    <span>{like ? like : null}</span>
                </div>
            </div>
        </div>
    );
}
 
export default Reply;
