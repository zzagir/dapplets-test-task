import styles from "./Layout.module.scss";
import LeftSide from "./left-side/LeftSide";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <LeftSide />
      {children}
      {/* <RightSide /> */}
    </div>
  );
};

export default Layout;
