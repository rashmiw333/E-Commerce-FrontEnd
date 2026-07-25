
import useFeedBackContext from "../context/FeedbackContext"

export default function FeedbackList({productId}){

    const{feedbacks} = useFeedBackContext();

    const productFeedbacks = feedbacks.filter(feedback=>feedback.productId === productId);

    console.log(feedbacks,"feedback");

    return(
        <div className="mt-4">
            <h4>Customer Reviews</h4>
            {
                productFeedbacks.length === 0 ?(
            <p>No Reviews Yet.</p>
                ):(
                    productFeedbacks.map((feedback)=>(
                        <div className="card mb-3"key={feedback.id}>
                            <div className="card-body">
                                <h5>{feedback.username}</h5>
                                <p>Rating: {"⭐".repeat(feedback.rating)}</p>

                                <p>{feedback.comment}</p>
                            </div>
                        </div>
                    ))
                )
            }   
        </div>
    )
}