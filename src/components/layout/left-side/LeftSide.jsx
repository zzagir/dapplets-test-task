import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./LeftSide.module.scss";
import { menu } from "./menu.data";
import cn from "clsx";
import { useState } from "react";
import { TbArrowRight } from "react-icons/tb";
import Cookies from "js-cookie";

const LeftSide = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dontShowClick = () => {
    Cookies.set("dontshow", false);
    navigate("/");
  };

  return (
    <div
      className={cn(styles.leftside, {
        [styles.leftsideActive]: isActive,
      })}
    >
      <button
        onClick={() => setIsActive(!isActive)}
        className={cn(styles.activeButton, {
          [styles.isActiveButton]: isActive,
        })}
      >
        <TbArrowRight fontSize={30} />
      </button>
      <Link onClick={dontShowClick} to={"/"} className={styles.logo}>
        <img src="./logo.png" alt="" />
        {isActive && (
          <div className={styles.logoText}>
            <span>Dapplets Project</span>
            <span>.</span>
          </div>
        )}
      </Link>
      {menu.map((el) => (
        <Link
          to={el.path}
          key={el.path}
          className={cn(styles.nav, {
            [styles.active]: pathname === el.path,
          })}
        >
          <img src={el.icon} alt={el.icon} />
          {isActive && <div>{el.name}</div>}
        </Link>
      ))}
    </div>
  );
};

export default LeftSide;
