import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "./context/auth/auth";
import { useState } from "react";

import Login from "./pages/Login";
import MainNews from "./pages/MainNews";

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
