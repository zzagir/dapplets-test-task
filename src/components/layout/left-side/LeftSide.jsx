import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./LeftSide.module.scss";
import { menu } from "./menu.data";
import cn from "clsx";
import { useState } from "react";
import { TbArrowRight } from "react-icons/tb";
import Cookies from "js-cookie";
import { useClickAway } from "@uidotdev/usehooks";

const LeftSide = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  /*
    Запоминает, открыт был sidebar или нет, и открывает или был открыт при выходе из сайта.
  
    useEffect(() => {
      if (Cookies.get("handleMenu") === "true") {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }, [isActive]);
    */

  const ref = useClickAway(() => {
    setIsActive(false);
  });

  const handleMenuClick = () => {
    Cookies.set("handleMenu", !isActive);
    setIsActive(!isActive);
  };

  const dontShowClick = () => {
    Cookies.set("dontshow", false);
    navigate("/");
  };

  return (
    <div
      ref={ref}
      className={cn(styles.leftside, {
        [styles.leftsideActive]: isActive,
      })}
    >
      <button
        onClick={handleMenuClick}
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
