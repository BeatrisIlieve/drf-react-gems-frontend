import { Header } from "./components/layout/Header/Header";
import { Main } from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";

import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./App.module.scss";
import "./global.scss";
// import "./variables.scss";

function App() {
  return (
    <div className={styles["app"]}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
