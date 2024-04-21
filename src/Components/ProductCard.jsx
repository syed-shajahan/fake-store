import { Box } from "@mui/material";
import React from "react";
import GridItem from "./gridItem";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  console.log(data, "test");
  return (
    <>
      {data?.map((datas) => {
        return (
          <GridItem>
            <Link to={`product-page/${datas.id}`} className="card">
              <Box className="imgWrap">
                <img src={datas.image} alt="" />
              </Box>
            </Link>
          </GridItem>
        );
      })}
    </>
  );
};

export default ProductCard;
