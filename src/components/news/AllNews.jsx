import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function AllNews() {
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            const newsData = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const json = await newsData.json()
            console.log(json, 'news!');
            setNews(json)
        }
        fetchNews()
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