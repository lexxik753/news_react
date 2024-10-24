import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import GetNews from "../../API/getNews"

export default function AllNews() {
    const [news, setNews] = useState([])

    useEffect(() => {
        async function fetchingNews() {
            const getNews = await GetNews.getAll()
            setNews(getNews)
        }
        fetchingNews()
    }, [])

    
    return (
        <div>
            <ol>
                {news.map((item) => {
                    return <li key={item.id}> <Link to={`${item.id}`}>{item.title}</Link> </li>
                })}
            </ol>
        </div>
    )
}