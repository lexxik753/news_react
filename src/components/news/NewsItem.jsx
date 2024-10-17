import { useParams } from "react-router-dom"


export default function NewsItem({news}) {
    const params = useParams()
    const paramId = params.id
    const item = news.filter(newsItem => {
        return newsItem == paramId
    })
    console.log(item);
    
    return (
        <div>
            {/* {} */}
        </div>
    )
}