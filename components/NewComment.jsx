import { useState } from "react";
import { useParams } from "react-router"
import { postComment } from "../api"

function NewComment({setComments, getComments}) {
    const { article_id } = useParams();
    const [body, setBody] = useState("")

    function handleChange(event) {
        setBody(event.target.value)
    }

    function postForm(event) {
        event.preventDefault()
        const formValues = {body: body}

        postComment(article_id, formValues)
        .then(() => {
            getComments(article_id).then((commentsData) => {
                setComments(commentsData)
                setBody("");
            })
        })
    }

    return (
        <>
        <p>Write a comment</p>
        <form onSubmit={postForm}>
        <textarea name='body' value={body} onChange={handleChange} required></textarea>
        <button>Send comment</button>
        </form>
        </>
    )
}

export default NewComment;