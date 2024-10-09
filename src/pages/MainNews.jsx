import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";

export default function MainNews() {

  return (
    <main>
      <h1>Главная страница новостей</h1>
      <Header />
      <Outlet />
    </main>
  );
}
