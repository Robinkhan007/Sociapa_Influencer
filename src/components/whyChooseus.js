// src/WhyChooseUs.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const WhyChooseUs = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "2rem", backgroundColor: "#fff" }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Box
          sx={{ flexGrow: 1, borderBottom: "1px solid black", marginX: "1rem" }}
        >
          <Typography variant="body1">Why</Typography>
        </Box>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Choose
        </Typography>
        <Box
          sx={{ flexGrow: 1, borderBottom: "1px solid black", marginX: "1rem" }}
        >
          <Typography variant="body1">Us</Typography>
        </Box>
      </Box>

      {/* Description Section */}
      <Typography
        variant="body1"
        
        sx={{ margin: "1rem 0", maxWidth: "800px", marginX: "auto"}}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </Typography>

      {/* Stats Section */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "2rem" }}
      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "red" }}>
            50+
          </Typography>
          <Typography variant="subtitle1">CLIENTS</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "red" }}>
            5+
          </Typography>
          <Typography variant="subtitle1">YEARS OF EXPERIENCE</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "red" }}>
            150+
          </Typography>
          <Typography variant="subtitle1">PROJECTS</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
