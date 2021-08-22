import { IReview } from "@libs/types";
import { GetServerSideProps, NextPage } from "next";

import Reply from "@components/Reply";
import Review from "@components/Review";
import Input from "@components/Input";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async ({req, query}) => {
    const {review_id} = query
    
    const  Response = await fetch('http://localhost:8082/movie/review/?reviewId='+review_id,{
        method: "GET",
        headers: {
            "u_id": req.cookies.UserId,
            "Authorization": req.cookies.Token
        }
    })
    const Review = await Response.json()
    console.log(Review)

    return{
        props:{
            review: Review.review
        }
    }
}

const Review_id: NextPage<{review: IReview}> = ({ review }) => {

    const [replies, setReplies] = useState(review.replyList.result)
    const postReplyHandler = async(reply: string) => {
        const response = await fetch(`http://localhost:8082/movie/reply?reviewId=${review.id}`,{
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
                "Authorization": localStorage.getItem("Token"),
                "u_id": localStorage.getItem("UserId")
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
                <Review review={review} key={review.id} />
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