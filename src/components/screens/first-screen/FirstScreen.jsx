import { Navigate, useNavigate } from "react-router-dom";
import styles from "./FirstScreen.module.scss";
import Cookies from "js-cookie";
import { useEffect } from "react";

const FirstScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("dontshow") === "true") {
      navigate("/dashboard");
    }
  }, []);

  const dontShowClick = () => {
    Cookies.set("dontshow", true);
    navigate("/dashboard");
  };

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
          <button onClick={dontShowClick}>Больше не показывать</button>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
