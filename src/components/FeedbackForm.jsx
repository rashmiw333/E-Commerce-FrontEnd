import { useState } from "react";
import useFeedBackContext from "../context/FeedbackContext";

export default function FeedbackForm({productId}){

    const {addFeedback} = useFeedBackContext();

    const[username,setUsername] = useState("");
    const[rating,setRating] = useState("");
    const[comment,seComment]= useState("");

    function handleSubmit(e){
        e.preventDefault();

        addFeedback({
            id: Date.now(),
            productId,
            username,
            rating,
            comment
        })

        setUsername("");
        setRating("");
        seComment("");

    }

 return(
    <div className="card mt-4">
        <div className="card-body">
            <form onSubmit={handleSubmit}>

                <input type="text" 
                 placeholder="Enter your name"
                 className="form-control mb-3"
                 value={username}
                 onChange={(e)=>setUsername(e.target.value)}
                 required/>

                 <select className="form-select mb-3"
                 value={rating}
                 onChange={(e) => {
                         console.log(e.target.value);
                         setRating(e.target.value);
                }}
                 required>
                    <option value="">Selected Rating</option>
                    <option value="5">★★★★★</option>
                    <option value="4">★★★★</option>
                    <option value="3">★★★</option>
                    <option value="2">★★</option>
                    <option value="1">★</option>
                 </select>

                 <textarea className="form-control mb-3"
                 rows = "3"
                 placeholder="Enter you feedback"
                 value={comment}
                 onChange={(e)=>seComment(e.target.value)}/>

                 <button className="btn btn-primary">Submit Review</button>
            </form>
        </div>
    </div>
    )
}