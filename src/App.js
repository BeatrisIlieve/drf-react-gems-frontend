import { Main } from "./components/layout/Main/Main";

import "normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "./App.module.css";
import './global.css';



function App() {
  return (
    <div className={styles["app"]}>
      <Main />
    </div>
  );
}

export default App;
