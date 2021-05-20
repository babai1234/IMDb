import Image from 'next/image';
import {HiOutlineThumbUp, HiThumbUp} from 'react-icons/hi'
import {useState} from 'react'
import {useRouter} from "next/router"
import Input from './Input';

const Reviews = () => {

    const [like, setLike] = useState(0)
    const [flag, setFlag] = useState(0)
    const router = useRouter();
    const Like = <HiOutlineThumbUp onClick={()=>setLike(1)} size="1.3em" className="mx-3.5 cursor-pointer" />
    const unLike = <HiThumbUp onClick={()=>setLike(0)} size="1.3em" className="mx-3.5 cursor-pointer" />
    const go = () =>{
        const url = router.pathname
        if(url.includes('Reply')){
            if(flag === 1){
                setFlag(0)
            }
            else{
                setFlag(1)
            }
            console.log(flag)
        }
        else{
            setFlag(0)
            console.log(flag)
            router.push('/Reply')
        }
    }

    return (
        <div className="py-4 flex text-gray-50">
            <div className="flex-shrink-0">
                <Image src="/avatar.png" width="40" height="40" className="rounded-full"/>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-l ml-4">User</p>
                <div className="ml-4">
                    <p className="mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo omnis alias animi 
                        dolorum facere.
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
 
export default Reviews;