import { useQuery } from "@tanstack/react-query";
import Loader from "../../loader/Loader";
import Layout from "../../layout/Layout";
import styles from "./Dashboard.module.scss";
import cn from "clsx";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { isLoading, error, data } = useQuery(
    ["all data"],
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
              <span className={cn(styles.id, styles.info)}>id</span>
              <span className={cn(styles.title, styles.info)}>title</span>
              <span className={cn(styles.rating, styles.info)}>rating</span>
              <span className={cn(styles.stock, styles.info)}>stock</span>
              <span className={cn(styles.price, styles.info)}>price</span>
              <span className={styles.stock}></span>
            </div>
            {data.products.map((product) => (
              <div key={product.id} className={styles.box}>
                <span className={styles.id}>{product.id}</span>
                <span className={styles.title}>{product.title}</span>
                <span className={styles.rating}>{product.rating}</span>
                <span className={styles.stock}>{product.stock}</span>
                <span className={styles.price}>{product.price}</span>
                <Link className={styles.button} to={`/dashboard/${product.id}`}>
                  More info
                </Link>
              </div>
            ))}
          </div>
        </Layout>
      )}
    </>
  );
};

export default Dashboard;
