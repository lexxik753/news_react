import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetNews from "../../API/getNews";

export default function NewsItem() {
  const params = useParams();
  const paramId = params.id;

  const [oneNews, setOneNews] = useState({});

  async function fetchingNews() {
    const getNews = await GetNews.getNewsById(paramId);
    setOneNews(getNews);
  }

  useEffect(() => {
    fetchingNews();
  }, []);
  console.log(oneNews);

  return (
    <section>
      <h1 key={oneNews.id}>{oneNews.title}</h1>
      <p>{oneNews.body}</p>
    </section>
  );
}
