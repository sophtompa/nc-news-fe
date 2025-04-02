import { useState, useEffect } from "react";
import { getArticle } from "../api";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

function Votes({ article_id }) {

    const [votes, setVotes] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [liked, setLiked] = useState(false)

    useEffect(
        () => { 
            getArticle(article_id).then((articleData) => { 
                setVotes(articleData.votes)
                setLoading(false)
            })
        }, [article_id])



    function handleVote() {
        setVotes((currentVotes) => currentVotes +1)
        setLiked(true)
    }

    function handleRemoveVote() {
        setVotes((currentVotes) => currentVotes -1)
        setLiked(false)
    }


    if(liked) 
        return (
        <>
        <p>Current votes: <strong>{votes}</strong></p>
        <button onClick={handleRemoveVote}>Click to remove vote</button>
        <AiFillHeart/>
        </>
    )

    return (
        <>
        <p>Current votes: <strong>{votes}</strong></p>
        <button onClick={handleVote}>Click to vote</button>
        <AiOutlineHeart/>
        
        </>
    )
}

export default Votes;