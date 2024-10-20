import React, { useEffect, useState } from "react";
import "./Post.css";
import Skeletonn from "./skeleton";
import Card from "./Card";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
function Posts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const productsCollection = collection(db, "products");

    getDocs(productsCollection)
      .then((snapshot) => {
        const allPosts = snapshot.docs.map((product) => ({
          ...product.data(),
          id: product.id,
        }));
        setProducts(allPosts);
        console.log(allPosts);
      })
      .catch((error) => {
        console.error("Error retrieving data from Firestore:", error.message);
      });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div></div>
      <div className="container">
        <h4 className="ml-1 mt-2">Fresh Recomentations</h4>
        <div className="row mx-auto center-div">
          {products.map((product) => {
            return loading ? <Skeletonn /> : <Card product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Posts;
