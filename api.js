import axios from "axios"

const api = axios.create({baseURL: "https://sophtompa-nc-news.onrender.com/api"})

const getAllArticles = () => {
    return api.get('/articles').then(({ data }) => {
        return data.articles
        })
    }

const getArticle = (article_id) => {
    return api.get(`/articles/${article_id}`).then(({data}) => {
        return data.article
    })
}

const getComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data.comments
    })
}

const postComment = (article_id, {body}) => {
    return api.post(`/articles/${article_id}/comments`, {body}).then((data) => {
        return data
    })
    .catch((err) => {
        return err;
    })
}

const deleteComment = (comment_id) => {
    return api.delete(`/comments/${comment_id}`).then((data) => {
        return data
    })
}

export { getAllArticles, getArticle, getComments, postComment, deleteComment }