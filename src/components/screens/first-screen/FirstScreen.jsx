import { useNavigate } from "react-router-dom";
import styles from "./FirstScreen.module.scss";

const FirstScreen = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.bg}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <span>Dapplets</span>
          <span>.</span>
        </div>
        <h1>Добро пожаловать</h1>
        <span>в тестовое задание на должность Frontend Developer</span>
        <span>
          Мы строим платформу Аугментированного веба, состоящую из браузерного
          плагина и децентрализованных приложений (дапплетов), основанных на
          крипто-технологиях.
        </span>
        <span>
          Наша платформа создается по принципу open-source и доступна для
          разработчиков со всего мира.
        </span>
        <div className={styles.buttons}>
          <button onClick={() => navigate("/dashboard")}>Продолжить</button>
          <button>Информация</button>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
