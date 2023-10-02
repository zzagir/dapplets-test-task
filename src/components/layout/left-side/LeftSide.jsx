import { useLocation } from "react-router-dom";
import styles from "./LeftSide.module.scss";
import { menu } from "./menu.data";
import cn from "clsx";

const LeftSide = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.leftside}>
      <div className={styles.logo}>
        <img src="./logo.png" alt="" />
      </div>
      {menu.map((el) => (
        <a
          href={el.path}
          key={el.path}
          className={cn(styles.nav, {
            [styles.active]: pathname === el.path,
          })}
        >
          <img src={el.icon} alt={el.icon} />
        </a>
      ))}
    </div>
  );
};

export default LeftSide;
