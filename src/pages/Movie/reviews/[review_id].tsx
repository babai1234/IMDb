import { IReview } from "@libs/types";
import { GetServerSideProps, NextPage } from "next";

import Reply from "@components/Reply";
import Review from "@components/Review";
import Input from "@components/Input";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {review_id} = context.params
    
    const  Response = await fetch('http://localhost:8082/movie/review/?reviewId='+review_id)
    const review = await Response.json()
    console.log(review)

    return{
        props:{
            review_res: review
        }
    }
}

const Review_id: NextPage<{review_res: IReview}> = ({ review_res }) => {

    const replies = review_res.replyList.result
    const postReplyHandler = async(reply: string) => {
        const response = await fetch(`http://localhost:8082/movie/reply?reviewId=${review_res.id}`,{
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
                "Authorization": localStorage.getItem("Token"),
                "u_id": localStorage.getItem("UserID")
            },
            body: JSON.stringify({content: reply})
        })
        console.log(response)
        const res = await response.json()
        console.log(res)
    }

    return (
        <div className="max-h-full flex flex-col">
            <div className="mx-auto w-8/12">
                <Review review={review_res} key={review_res.id} />
            </div>
            <div className="mx-auto pl-14 w-8/12">
                <Input postData={postReplyHandler} />
                {replies.map(reply => (
                    <Reply reply={reply} key={reply.id} />
                ))}
            </div>
        </div>
    );
}
 
export default Review_id;