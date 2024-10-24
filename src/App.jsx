import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "./context/auth/auth";
import { useState } from "react";

import Login from "./pages/Login";
import MainNews from "./pages/MainNews";
import AllNews from "./components/news/AllNews";
import NewsItem from "./components/news/NewsItem";

function App() {
  const [isAuth, setIsAuth] = useState(false);

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
          element: <p>Sikeld was here</p>,
        },
        {
          path: "news",
          element: <AllNews />,
        },
        {
          path: "news/:id",
          element: <NewsItem />,
        },
      ],
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
