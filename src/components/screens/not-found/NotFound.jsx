import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <Layout>
      <div className={styles.notfound}>
        <div>
          <div>
            <h1>Oops!</h1>
            <h2>Not found</h2>
          </div>
          <Link to={"/dashboard"}>GO TO HOMEPAGE</Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
