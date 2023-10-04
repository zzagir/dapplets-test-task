import { useQuery } from "@tanstack/react-query";
import Loader from "../../loader/Loader";
import Layout from "../../layout/Layout";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const { isLoading, error, data } = useQuery(
    ["data"],
    async () => {
      const data = await fetch("https://dummyjson.com/products").then((res) =>
        res.json()
      );

      return { data };
    },
    { select: ({ data }) => data }
  );

  return (
    <>
      {isLoading || error ? (
        <Loader />
      ) : (
        <Layout>
          <div className={styles.products}>
            <div className={styles.box}>
              <span
                className={styles.id}
                style={{ fontWeight: "700", color: "#2a2a2a" }}
              >
                id
              </span>
              <span
                className={styles.title}
                style={{ fontWeight: "700", color: "#2a2a2a" }}
              >
                title
              </span>
              <span
                className={styles.rating}
                style={{ fontWeight: "700", color: "#2a2a2a" }}
              >
                rating
              </span>
              <span
                className={styles.stock}
                style={{ fontWeight: "700", color: "#2a2a2a" }}
              >
                stock
              </span>
              <span
                className={styles.price}
                style={{ fontWeight: "700", color: "#2a2a2a" }}
              >
                price
              </span>
              <span className={styles.stock}></span>
            </div>
            {data.products.map((product) => (
              <div key={product.id} className={styles.box}>
                <span className={styles.id}>{product.id}</span>
                <span className={styles.title}>{product.title}</span>
                <span className={styles.rating}>{product.rating}</span>
                <span className={styles.stock}>{product.stock}</span>
                <span className={styles.price}>{product.price}</span>
                <button className={styles.button}>More info</button>
              </div>
            ))}
          </div>
        </Layout>
      )}
    </>
  );
};

export default Dashboard;
