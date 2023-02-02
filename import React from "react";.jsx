import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Grid, List } from "@mui/material";
import Log from "../home/fofl.png";

const Logo = styled("img")(({ theme }) => ({
  width: "100px",
  fontSize: "70px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    width: "100px",
  },
}));

const Con = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  fontsSize: "20px",
  fontWeight: 700,
  lineHeight: "26px",
  letterSpacing: "0em",

  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    display: "none",
  },
}));

function Home() {
  return (
    <div>
      <Box
        sx={{
          height: "90px",
          maxWidth: "100%",
          backgroundColor: "red",
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              position: "relative",
              top: "32px",
            }}
          >
            <Grid item xs={12} sm={5}>
              <Logo src={Log}></Logo>
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={6}>
              <Con>contuct us</Con>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Home />
    </div>
  );
}

export default Home;
