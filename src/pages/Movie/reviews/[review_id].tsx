import { IMovieReviewReply, IMovieReview } from "@libs/types";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";

import Reply from "@components/Reply";
import Review from "@components/Review";
import useSWR from "swr";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {review_id} = context.params
    
    const [replyResponse, reviewResponse] = await Promise.all([
        axios.get('http://localhost:3001/reply')
            .then(res => res.data)
            .catch(err => console.log(err.message)),
        axios.get('http://localhost:3001/review/'+review_id)
            .then(res => res.data)
            .catch(err => console.log(err.message))
    ])
    return{
        props:{
            reply_res: replyResponse,
            review_res: reviewResponse
        }
    }
}

const Review_id: NextPage<{reply_res: IMovieReviewReply[], review_res: IMovieReview}> = ({reply_res, review_res}) => {

//     const fetcher = (url: string) => axios(url).then(res => res.data)
//      const {data} = useSWR<IMovieReviewReply[]>('http://localhost:3001/Reply', fetcher, {initialData: reply_res})

    return (
        <div className="max-h-full flex flex-col">
            <div className="mx-auto w-8/12">
                <Review review={review_res} key={review_res.id} />
            </div>
            <div className="mx-auto pl-14 w-8/12">
                {reply_res.map(reply => (
                    <Reply reply={reply} key={reply.id} />
                ))}
            </div>
        </div>
    );
}
 
export default Review_id;