import { useState, useEffect } from "react"
import { getAllArticles } from "../api"

function Articles() {
    const [isLoading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])

    useEffect(
        () => { 
            getAllArticles().then((articleData) => { 
                setArticles(articleData)
                setLoading(false)
            })
        }, [])

    if (isLoading) return <h3>Getting Articles....</h3>

    return(
        <>
        <h3 className='articles'>Articles: </h3>
        <section>
        {articles.map((article) => {
            return (
                <ul key={article.title}>
                    <li className='title'>{article.title}</li>
                    <li>posted by: {article.author}</li>
                    <li>topic: {article.topic}</li>
                    <li>date: {article.created_at}</li>
                    <li>comments: {article.comment_count}</li>
                    <li>votes: {article.votes}</li>
                    <img src={article.article_img_url}/>
                </ul>
            )
        })}
        </section>
        </>
    )
}

export default Articles;