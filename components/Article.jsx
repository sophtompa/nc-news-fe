import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getArticle } from "../api"

function Article() {
    const { article_id} = useParams();
    const [isLoading, setLoading] = useState(true)
    const [article, setArticle] = useState(null)
    const [votes, setVotes] = useState(0)

    useEffect(
        () => { 
            getArticle(article_id).then((articleData) => { 
                setArticle(articleData)
                setVotes(articleData.votes)
                setLoading(false)
            })
        }, [article_id])

    function handleVotes() {
        setVotes((currentVotes) => currentVotes +1)
    }


    if (isLoading) return <p>Loading...</p>;
    if (!article) return <p>No article found</p>;

    return (
        <>
        <h1>{article.title}</h1>
        <p>Posted by: {article.author}</p>
        <p>{article.body}</p>
        <img src={article.article_img_url}></img>
        <p>Current votes: <strong>{votes}</strong></p>
        <button onClick={handleVotes}>Click to vote</button>
        </>
    )
}


export default Article;