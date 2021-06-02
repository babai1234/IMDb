import Reply from "@components/Reply";
import Review from "@components/Review";
import { reply, review } from "@libs/types";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.params
    const [reply_res, review_res] = await Promise.all([
        fetch('http://localhost:3001/Reply').then(res => res.json()).catch(err => console.log(err.message)),
        fetch('http://localhost:3001/Movie/1/Review/'+id).then(res => res.json()).catch(err => console.log(err.message))
    ])
    console.log({reply_res, review_res})
    return{
        props:{
            reply_res,
            review_res
        }
    }
}

const Review_id: NextPage<{reply_res: reply[], review_res: review}> = ({reply_res, review_res}) => {
    console.log(reply_res, review_res)
    return (
        <div className="bg-black h-screen flex flex-col justify-between">
            {/* <div className="m-auto w-8/12">
                <Review review={review_res} key={review_res.review_id} />
            </div> */}
            <div className="flex flex-col m-auto pl-14 w-8/12">
                {reply_res.map(reply => (
                    <Reply reply={reply} key={reply.reply_id} />
                ))}
            </div>
        </div>
    );
}
 
export default Review_id;