import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/auth";

import Button from "./UI/Button";
import { Input } from "./UI/Input";

export function Form({ userLogin, setUserLogin }) {
  const [title, setTitle] = useState("");
  const navigate = useNavigate()
  const { isAuth, setIsAuth } = useContext(AuthContext)

  function isValide() {
    if (userLogin.login === "user" && userLogin.password === "user") {
      console.log("Correct user");
      setIsAuth(true)
      navigate('/main')
      return setTitle(null)
    } else {
      return setTitle("Введите корректные данные");
    }
  }

  function login(event) {
    event.preventDefault();
    isValide();
    console.log(userLogin);
    setUserLogin((prev) => {
      return {
        ...prev,
        login: "",
        password: "",
      };
    });
  console.log(isAuth)  

  }
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <Input
          placeholder="Введите логин"
          value={userLogin.login}
          onChange={(event) =>
            setUserLogin((prev) => {
              return {
                ...prev,
                login: event.target.value,
              };
            })
          }
        />
        <Input
          placeholder="Введите пароль"
          value={userLogin.password}
          onChange={(event) =>
            setUserLogin((prev) => {
              return {
                ...prev,
                password: event.target.value,
              };
            })
          }
        />
        <Button btnEvent={login}>Вход </Button>
      </form>
      <h3 style={{ color: "red" }}>{title}</h3>
    </div>
  );
}
