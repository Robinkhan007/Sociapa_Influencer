import React, { useState, useEffect } from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import "./BrandSection.css"; // Use for custom CSS styles

const BrandSection = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchBrands = async () => {
      try {
        const response = await fetch(
          "https://yh-be-staging.vercel.app/api/v1/get-partners"
        );
        const result = await response.json();
        if (result.success) {
          setBrands(result.data.findData);
        }
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* Title Section */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          borderBottom: "2px solid #000",
          display: "inline-block",
          marginBottom: "40px",
          paddingBottom: "10px",
        }}
      >
        Brands That Trust Us
      </Typography>

      <Grid container spacing={4}>
        {/* Left Cube Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body1" paragraph style={{marginBottom:"40px"}}>
              We work with visionary FMCG Brands. We are dedicated to building a
              brighter and clarified vision—from major companies to global
              nonprofits and everything in between.
            </Typography>
            {/* Cube Section */}
            <Box className="cube">
              <div className="cube-face cube-front">
                <img src="c11.png" alt="Front Face" />
              </div>
              <div className="cube-face cube-back">
                <img src="c11.png" alt="Back Face" />
              </div>
              <div className="cube-face cube-left">
                <img src="c11.png" alt="Left Face" />
              </div>
              <div className="cube-face cube-right">
                <img src="c11.png" alt="Right Face" />
              </div>
              <div className="cube-face cube-top">
                <img src="c11.png" alt="Top Face" />
              </div>
              <div className="cube-face cube-bottom">
                <img src="c11.png" alt="Bottom Face" />
              </div>
            </Box>
          </Box>
        </Grid>

        {/* Right Logo Grid Section */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={0}>
            {brands.length > 0 ? (
              brands.map((brand, index) => {
                // Determine the column width for each row based on the pattern
                const columnWidth = index % 5 === 2 || index % 5 === 3 ? 6 : 4; // 6 for 2 logos in a row, 4 for 3 logos in a row
                return (
                  <Grid item xs={columnWidth} key={index}>
                    <Box className="logo-item">
                      <img
                        src={brand.image}
                        alt={`Logo ${index + 1}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Box>
                  </Grid>
                );
              })
            ) : (
              <Typography variant="body1">Loading logos...</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BrandSection;
