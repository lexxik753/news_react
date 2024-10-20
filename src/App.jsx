import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { AuthContext } from "./context/auth/auth";
import { useState, useEffect } from "react";

import Login from "./pages/Login";
import MainNews from "./pages/MainNews";
import AllNews from "./components/news/AllNews";
import NewsItem from "./components/news/NewsItem";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [news, setNews] = useState([])

  useEffect(() => {
      const fetchNews = async () => {
          const newsData = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
          const json = await newsData.json()
          setNews(json)
      }
      fetchNews()
  }, [])
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/main",
      element: <MainNews />,
      children: [
        {
          index: true,
          element: <p>Sikeld was here</p>
        },
        {
          path: 'news',
          element: <AllNews news={news}/>,
        },
        {
          path: 'news/:id',
          element: <NewsItem news={news}/>
        }
      ]
    },
  ]);

  return (
    <div>
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
        }}
      >
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
