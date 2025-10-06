import { Box, Grid } from "@mui/material";
import React from "react";
import SideMenu from "../sidebar/Sidebar";

const HomeComponent = () => {
  return (
    <Box>
      <Grid container>
        <Grid size={{ xs: 8 }}>test</Grid>
        <Grid size={{ xs: 4 }}>
            <SideMenu />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeComponent;
