import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import FlexBetween from "../FlexBetween";

const Signup = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  const userInformation = {
    userName,
    password,
    city,
  };

  const register = async (e) => {
    try {
      const savedUserResponse = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInformation),
      });

      const savedUser = await savedUserResponse.json();
      console.log("success submitting", savedUser);
    } catch (error) {
      console.error("error submitting", error);
    }
  };

  return (
    <form onSubmit={register}>
      <Box
        m="10rem"
        display="flex"
        width="12rem"
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "20rem",
        }}
      >
        <Typography variant="h5" component="h2" mb="2rem">
          Signup
        </Typography>
        <Box mb="1rem">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </Box>
        <Box mb="1rem">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Box>
        <Box mb="1rem">
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </Box>
        <Button
          onClick={register}
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            m: "2rem 0",
            p: "1rem",
            // backgroundColor: theme.palette.primary.light,
            // color: theme.palette.background.alt,
            // "&:hover": { color: theme.palette.primary.main },
          }}
        >
          Register
        </Button>
      </Box>
    </form>
  );
};

export default Signup;
