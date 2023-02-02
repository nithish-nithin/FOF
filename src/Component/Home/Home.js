import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Grid, List } from "@mui/material";
import Log from "../Home/asset/log.png";
import Hom from "../Home/asset/ho.jpg";
import { height } from "@mui/system";

const Logo = styled("img")(({ theme }) => ({
  width: "100px",
  fontSize: "70px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    width: "100px",
  },
}));

const Homeimg = styled("img")(({ theme }) => ({
  width: "400px",
  borderRadius: "60px",
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    borderRadius: "60px",
    position: "relative",
    top: "130px",
  },
}));

const Con = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  fontsSize: "20px",
  fontWeight: 700,
  lineHeight: "26px",
  letterSpacing: "0em",
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    display: "none",
  },
}));

const Firstcon = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "52px",
  fontWeight: 400,
  lineHeight: "68px",
  letterSpacing: "0em",
  position: "relative",
  top: "150px",

  [theme.breakpoints.down("sm")]: {
    fontFamily: "Roboto",
    fontSize: "26px",
    fontweight: 400,
    lineHeight: "34px",
    letterSpacing: "0em",
    textAlign: "center",
    position: "relative",
    top: "93px",
  },
}));
const Subcon = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "34px",
  letterSpacing: "0em",
  textAlign: "left",
  position: "relative",
  top: "150px",
  color: "#ff8000",

  [theme.breakpoints.down("sm")]: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "center",
    position: "relative",
    top: "100px",
  },
}));
const About = styled("div")(({ theme }) => ({
  fontFamily: "Times New Roman",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "29px",
  letterSpacing: "0em",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    position: "relative",
    top: "160px",
  },
}));

const Ab1 = styled("div")(({ theme }) => ({
  fontFamily: "Times New Roman",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "29px",
  letterSpacing: "0em",

  color: "#333333",
  position: "relative",
  top: "80px",

  [theme.breakpoints.down("sm")]: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 300,
    lineHeight: "20px",
    letterSpacing: "0px",
    textAlign: "center",
    color: "#333333",
    position: "relative",
    top: "190px",
  },
}));

const Span = styled("span")(({ theme }) => ({
  fontFamily: "Roboto",

  fontSize: "54px",
  fontWeight: 700,
  lineHeight: "29px",
  letterSpacing: "0em",

  color: "#ff8000",

  [theme.breakpoints.down("sm")]: {},
}));

function Home() {
  return (
    <div>
      <Box
        sx={{
          height: "90px",
          maxWidth: "100%",
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
            <Grid item xs={4} sm={0.1}></Grid>
            <Grid item xs={1} sm={5}>
              <Logo src={Log}></Logo>
            </Grid>
            <Grid item xs={5} sm={6}>
              <Con>
                contuct us
                <div>contuct us</div>
                <div>contuct us</div>
                <div>contuct us</div>
              </Con>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          height: "600px",
          maxWidth: "100%",
        }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Firstcon>MANAGEMENT & SERVICES COMPANY</Firstcon>

              <Subcon>
                We are a B2B & B2C startup company that strives for the best and
                understand what customers and business wants.
              </Subcon>
            </Grid>
            <Grid item xs={12} sm={2}></Grid>
            <Grid item xs={12} sm={4}>
              <Homeimg src={Hom}></Homeimg>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          height: "520px",
          maxWidth: "100%",
        }}
      >
        <Container>
          <About>About us</About>

          <Grid container>
            <Grid item xs={12} sm={4}></Grid>
            <Grid item xs={12} sm={2}></Grid>
            <Grid item xs={12} sm={6}>
              <Ab1>
                <Span>O</Span>ur service begins in 2020 in the capital of
                Tamilnadu,Chennai. Progressively we connect customers and
                businesses with various skilled professionals to help with odd
                jobs and errands.
              </Ab1>{" "}
              <br />
              <Ab1>
                we made our mission to bring a more accessible, affordable and
                efficient way of service that requires for day to day life of
                customers and businesses.
              </Ab1>
              <br />
              <Ab1>
                we’re constantly pushing the boundaries of what’s possible way
                of service to minimise our valuable time, that way we can
                enhance our quality of time and contribute to other various
                individual and business developments.
              </Ab1>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Home;
