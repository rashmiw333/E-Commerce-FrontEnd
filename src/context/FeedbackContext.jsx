import {createContext,useContext,useState} from "react";

const FeedbackContext = createContext();
const useFeedBackContext =()=> useContext(FeedbackContext);
export default useFeedBackContext;

export function FeedbackProvider({children}){

    const [feedbacks,setFeedBacks] = useState([]);

    function addFeedback(feedback){
        setFeedBacks([...feedbacks,feedback]);
    }

    return (
        <FeedbackContext.Provider value={{
            feedbacks,
            addFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )

}