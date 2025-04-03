import { deleteComment, getComments } from "../api"

function DeleteComment({comment_id, article_id, setComments}) {

    function handleDelete() {
        deleteComment(comment_id).then(() => {
            getComments(article_id).then((commentsData) => {
                setComments(commentsData)
            })
        })
        .catch((err) => {
            return err;
        })
    }

    return(
        <button className='delete-button' onClick={handleDelete}>delete comment</button>
    )
}

export default DeleteComment;