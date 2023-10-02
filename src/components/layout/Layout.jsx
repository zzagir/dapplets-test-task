import styles from "./Layout.module.scss";
import LeftSide from "./left-side/LeftSide";
import RightSide from "./right-side/RightSide";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <LeftSide />
      {children}
      <RightSide />
    </div>
  );
};

export default Layout;
