import { Link } from "react-router-dom";

import Button from "../components/UI/Button";

export default function MainNews() {


  return (
    <main>
      <h1>Главная страница новостей</h1>
      <Button><Link to={'/'}> Выход </Link></Button>
    </main>
  );
}
