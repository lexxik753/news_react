import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function AllNews({news}) {


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