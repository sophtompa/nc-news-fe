import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAllArticles } from "../api"
import { useSearchParams } from "react-router-dom"

function Articles() {
    const [isLoading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const topic = searchParams.get("topic") || ""

    useEffect(
        () => { 
            getAllArticles(topic).then((articleData) => { 
                setArticles(articleData)
                setLoading(false)
            })
        }, [topic])

    function handleClick(article_id) {
        navigate(`/articles/${article_id}`)
    }

    function handleTopic(event) {
        const selectedTopic = event.target.value
        setSearchParams(selectedTopic ? {topic: selectedTopic} : {});
    }



    if (isLoading) return <h3>Getting Articles....</h3>

    return(
        <>
        <p>Sort articles by:</p><select onChange={handleTopic} value={topic}>
            <option value="" disabled>Topic</option>
            <option value="">All Articles</option>
            <option value='cooking'>Cooking</option>
            <option value='coding'>Coding</option>
            <option value='football'>Football</option>
        </select>
        <h3 className='articles'>Articles: </h3>
        <section>
        {articles.map((article) => {
            return (
                <ul key={article.title} className='article-display' value={article.article_id} onClick={() => handleClick(article.article_id)}>
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