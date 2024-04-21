import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";
import MainLayout from "../../layout/mainLayout";
const HomePage = () => {
  const Api_Url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Api_Url);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [Api_Url]);
  return (
    <>
      {" "}
      <MainLayout>
      <Box className="container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <ProductCard data={data} />
          </Grid>
        </Box>
      </Box>
      </MainLayout>
    {" "}
    </>
  );
};

export default HomePage;
