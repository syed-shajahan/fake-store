import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const Product_API = `https://fakestoreapi.com/products/${id}`;
  const [productDatas, setProductDatas] = useState([]);
  useEffect(() => {
    const singleProduct = async () => {
      try {
        const response = await fetch(Product_API);
        const responseData = await response.json();
        setProductDatas(responseData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    singleProduct();
  }, [Product_API]);

  return (
    <div>
      {productDatas && (
        <>
          <h2>{productDatas.title}</h2>
          <img src={productDatas.image} alt={productDatas.title} />
          <p>{productDatas.description}</p>
          <p>Price: ${productDatas.price}</p>
          {/* Add more details as needed */}

          <Link to="/order-now">Order Now</Link>
        </>
      )}
    </div>
  );
};

export default ProductPage;
