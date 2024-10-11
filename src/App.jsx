import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import { AuthContext } from "./context/auth/auth";
import { useState } from "react";

import Login from "./pages/Login";
import MainNews from "./pages/MainNews";
import AllNews from "./components/news/AllNews";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const params = useParams()
  const newsId  = params.id
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
          element: <AllNews />,
        },
        {
          path: 'news/:id',
          element: `${newsId}`
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
