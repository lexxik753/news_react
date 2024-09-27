import styles from "./Login.module.css";
import { Form } from "../components/Form";

import { useEffect, useState } from "react";

export default function Home() {
  // const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  //     const json = await data.json();
  //     console.log(json);
  //     setTodos(json);
  //   };
  //   fetchData();
  // }, []);

  const [userLogin, setUserLogin] = useState({
    login: "",
    password: "",
  });

  return (
    <>
      <div className={styles.card}>
        <h1 className={styles.title}>Добро пожаловать</h1>
        <Form userLogin={userLogin} setUserLogin={setUserLogin} />
      </div>
      {/* <ul>
      {todos.map((todo, index) => <li key={index}>{todo.title}</li>)}
    </ul> */}
    </>
  );
}
