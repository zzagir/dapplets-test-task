import { useQuery } from "@tanstack/react-query";
import styles from "./Dashboard.module.scss";
import Loader from "../../loader/Loader";
import Layout from "../../layout/Layout";

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
          <div>
            {data.products.map((product) => (
              <div key={product.id}>{product.title}</div>
            ))}
          </div>
        </Layout>
      )}
    </>
  );
};

export default Dashboard;
