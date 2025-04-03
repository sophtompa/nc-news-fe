import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getComments } from "../api"
import NewComment from "./NewComment";
import DeleteComment from "./DeleteComment";

function Comments() {
    const { article_id } = useParams();
    const [isLoading, setLoading] = useState(true)
    const [comments, setComments] = useState([])
    const [isVisible, setIsVisible] = useState(true)

    useEffect(
        () => { 
            getComments(article_id).then((commentsData) => { 
                setComments(commentsData)
                setLoading(false)
            })
        }, [article_id])

    if (isLoading) return <p>...</p>;
    if (!comments) return <p>No comments yet.</p>

    

    return (
        <>
        <h1>Comments</h1> 
        <NewComment setComments={setComments} getComments={getComments}/>
        <div className='hide-show-separation'></div>
        <button className='hide-show' onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide comments' : 'Show comments'}</button>
        {isVisible && (
            <div>
        {comments.map((comment) => {
            return (
                <ul key={comment.comment_id}>
                <li className="comment-body">{comment.body}</li>
                <li>Posted by: {comment.author}</li>
                <li>Posted at: {comment.created_at}</li>
                <li>Votes: {comment.votes}</li>
                <DeleteComment comment_id={comment.comment_id} article_id={comment.article_id} setComments={setComments}/>
                </ul>
            )
        })}
            </div>
        )}
        </>
    )
}

export default Comments;