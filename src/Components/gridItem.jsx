import { Grid } from "@mui/material";
import React from "react";

const GridItem = ({ children }) => {
  return (
    <Grid item lg={4} md={6} xs={12}>
      {children}
    </Grid>
  );
};

export default GridItem;
