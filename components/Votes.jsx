import { useState, useEffect } from "react";
import { getArticle } from "../api";

function Votes({ article_id }) {

    const [votes, setVotes] = useState(0);
    const [isLoading, setLoading] = useState(true);

    useEffect(
        () => { 
            getArticle(article_id).then((articleData) => { 
                setVotes(articleData.votes)
                setLoading(false)
            })
        }, [article_id])



    function handleVotes() {
        setVotes((currentVotes) => currentVotes +1)
    }

    return (
        <>
        <p>Current votes: <strong>{votes}</strong></p>
        <button onClick={handleVotes}>Click to vote</button>
        </>
    )
}

export default Votes;