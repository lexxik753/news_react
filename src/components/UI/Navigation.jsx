import styles from './Navigation.module.css'
import { Link } from "react-router-dom";

export function Navigation({ navigation }) {

  return (
    <nav>
      <ul className={styles.navNews}>
        {navigation.map((nav) => {
          return <li key={nav.link}> <Link to={nav.link}>{nav.title}</Link> </li>;
        })}
      </ul>
    </nav >
  );
}
