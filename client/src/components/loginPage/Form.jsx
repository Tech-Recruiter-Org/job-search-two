import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../FlexBetween";

const Signup = () => {
  const [pageType, setPageType] = useState("login");

  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const userInformation = {
    userName,
    password,
    city,
  };

  const login = async (e) => {
    try {
      const loginResponse = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInformation),
      });

      const existingUser = await loginResponse.json();

      if (existingUser) {
        navigate("/home");
      }

      console.log("success logging in", existingUser);
    } catch (error) {
      console.error("error logging in", error);
    }
  };

  const register = async (e) => {
    navigate("/home");

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

  const handleFormSubmit = async () => {
    console.log("LOGIN", isLogin);
    console.log("REGISTER", isRegister);

    if (isLogin) {
      console.log("login called");
      await login();
    }

    if (isRegister) {
      console.log("register called");
      await register();
    }
  };

  return (
    <form>
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
          {isLogin ? "LOGIN" : "SIGNUP"}
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
        {isLogin ? undefined : (
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
        )}

        <Button
          onClick={handleFormSubmit}
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
          {isLogin ? "LOGIN" : "SIGNUP"}
        </Button>
        <Box>
          <Typography
            variant="h6"
            component="h2"
            mb="2rem"
            onClick={() => setPageType(isLogin ? "register" : "login")}
          >
            {isLogin
              ? "Don't have an account? Signup here"
              : "Already have an account? Login here"}
          </Typography>
        </Box>
      </Box>
    </form>
  );
};

export default Signup;
