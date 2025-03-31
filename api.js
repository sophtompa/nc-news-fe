import axios from "axios"

const api = axios.create({baseURL: "https://sophtompa-nc-news.onrender.com/api"})

const getAllArticles = () => {
    return api.get('/articles').then(({ data }) => {
        return data.articles
        })
    }

export { getAllArticles }