import Reply from "@components/Reply";
import { reply } from "@libs/types";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:3001/Reply')
    const reply = await res.json()
    return{
        props:{
            reply
        }
    }
}

const Review_id: NextPage<{reply: reply[]}> = ({reply}) => {
    return (
        <div className="bg-black h-screen flex flex-col justify-between">
            {/* <div className="m-auto w-8/12">
                <Reply />
            </div> */}
            <div className="flex flex-col m-auto pl-14 w-8/12">
                {reply.map(reply => (
                    <Reply reply={reply} key={reply.reply_id} />
                ))}
            </div>
        </div>
    );
}
 
export default Review_id;