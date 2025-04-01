import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getArticle } from "../api"

function Article() {
    const { article_id} = useParams();
    const [isLoading, setLoading] = useState(true)
    const [article, setArticle] = useState(null)

    useEffect(
        () => { 
            getArticle(article_id).then((articleData) => { 
                setArticle(articleData)
                setLoading(false)
            })
        }, [article_id])


    if (isLoading) return <p>Loading...</p>;
    if (!article) return <p>No article found</p>;

    return (
        <>
        <h1>{article.title}</h1>
        <p>Posted by: {article.author}</p>
        <p>{article.body}</p>
        <img src={article.article_img_url}></img>
        <h2>Comments:</h2>

        </>
    )
}


export default Article;