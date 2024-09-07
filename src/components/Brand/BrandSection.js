import React, { useState, useEffect } from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import "./BrandSection.css"; // Use for custom CSS styles

const BrandSection = () => {
  const [brands, setBrands] = useState([]);

  // Uncomment and configure the following useEffect for API call
  // useEffect(() => {
  //   const fetchBrands = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://yh-be-staging.vercel.app/api/v1/get-partners"
  //       );
  //       const result = await response.json();
  //       if (result.success) {
  //         setBrands(result.data.findData);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching brands:", error);
  //     }
  //   };
  //   fetchBrands();
  // }, []);

  return (
    <Box maxWidth="lg" sx={{ mt: 5, border: "1px solid", maxWidth: "100%" }}>
      {/* Title Section */}
      <Grid container spacing={4}>
        {/* Left Cube Section */}
        <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        sx={{
          // borderBottom: "2px solid #000",
          display: "inline-block",
          // marginBottom: "40px",
          // paddingBottom: "10px",
          // border:"2px solid"
        }}
      >
        Brands That Trust Us
      </Typography>
          <Box sx={{ textAlign: "center" ,borderRight:"2px solid",lineHeight:"2px", padding:"10px 10px" }}>
            <Typography variant="body1" paragraph style={{ marginBottom: "40px" }}>
              We work with visionary FMCG Brands. We are dedicated to building a
              brighter and clarified vision—from major companies to global
              nonprofits and everything in between.
            </Typography>
            
            {/* Cube Section */}
            <Box className="cube" sx={{textAlign:"center"}}>
              <div className="cube-face cube-front">
                <div style={{
                  position: "absolute",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  color: "black",
                  backgroundColor: "#000000",
                  alignItems: "center",
                  justifyContent: "center"  // Add this line to center the icon horizontally
                }}>
                  <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 6.63398C12.1667 7.01888 12.1667 7.98112 11.5 8.36602L1.75 13.9952C1.08333 14.3801 0.25 13.899 0.25 13.1292L0.25 1.87083C0.25 1.10103 1.08333 0.619909 1.75 1.00481L11.5 6.63398Z" fill="white" />
                  </svg>
                </div>
                <iframe
                  src="https://www.youtube.com/embed/mRFsQgs1TmQ?autoplay=1&mute=1"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="cube-video"
                ></iframe>
              </div>
              <div className="cube-face cube-back">
                <iframe
                  src="https://www.youtube.com/embed/mRFsQgs1TmQ?autoplay=1&mute=1"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="cube-video"
                ></iframe>
              </div>
              <div className="cube-face cube-left">
                <iframe
                  src="https://www.youtube.com/embed/mRFsQgs1TmQ?autoplay=1&mute=1"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="cube-video"
                ></iframe>
              </div>
              <div className="cube-face cube-right">
                <iframe
                  src="https://www.youtube.com/embed/mRFsQgs1TmQ?autoplay=1&mute=1"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="cube-video"
                ></iframe>
              </div>
              <div className="cube-face cube-top">
                <iframe
                  src="https://www.youtube.com/embed/mRFsQgs1TmQ?autoplay=1&mute=1"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="cube-video"
                ></iframe>
              </div>
              <div className="cube-face cube-bottom">
                <iframe
                  src="https://www.youtube.com/embed/mRFsQgs1TmQ?autoplay=1&mute=1"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="cube-video"
                ></iframe>
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
    </Box>
  );
};

export default BrandSection;
