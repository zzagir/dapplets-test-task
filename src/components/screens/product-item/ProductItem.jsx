import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductItem.module.scss";
import Layout from "../../layout/Layout";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../loader/Loader";

const ProductItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery(
    ["id data"],
    async () => {
      const data = await fetch(`https://dummyjson.com/products/${id}`).then(
        (res) => res.json()
      );

      return { data };
    },
    { select: ({ data }) => data }
  );

  console.log(data);
  return (
    <>
      {isLoading || error ? (
        <Loader />
      ) : (
        <Layout>
          <div className={styles.container}>
            <div className={styles.box}>
              <div>
                <h2>Name:</h2>
                <h4 className={styles.title}>{data.title}</h4>
              </div>
              <div>
                <h2>Brand:</h2>
                <h4 className={styles.title}>{data.brand}</h4>
              </div>
              <div>
                <h2>Description:</h2>
                <h4 className={styles.description}>{data.description}</h4>
              </div>
              <div>
                <h2 className={styles.rating}>Rating:</h2>
                <h4>{data.rating}</h4>
              </div>
              <div>
                <h2>Stock:</h2>
                <h4 className={styles.stock}>{data.stock}</h4>
              </div>
              <div>
                <h2>Price:</h2>
                <h4 className={styles.price}>{data.price}</h4>
              </div>
              <button
                className={styles.button}
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Back
              </button>
            </div>
            <div className={styles.boxImages}>
              {data.images.map((dataImage) => {
                return <img src={dataImage} alt={data.title} key={dataImage} />;
              })}
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default ProductItem;
