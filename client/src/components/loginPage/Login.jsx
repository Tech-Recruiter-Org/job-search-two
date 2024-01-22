import { Box, Typography, useTheme } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  // const red = theme.palette.extra.red;

  return (
    <Box height="100vh">
      <Box
        display="flex"
        width="100%"
        padding="2rem 15%"
        justifyContent="space-between"
      >
        <Box
          marginLeft="10%"
          width="30%"
          margin="5rem"
          sx={{
            backgroundColor: "white",
            borderRadius: "5rem",
          }}
        >
          <Typography
            p="-6rem rem"
            mt="5rem"
            paddingLeft="3rem"
            variant="h4"
            // color={red}
            fontWeight="300"
            sx={{
              color: "#ed7447",
            }}
          >
            Welcome to your professional community
          </Typography>
          <Box
            width="40vh"
            p="2rem"
            m="-2rem 3rem"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
          >
            <Form />
          </Box>
        </Box>

        <Box width="50%">
          <Box width="50px" height="50px" marginTop="5rem">
            <img
              width="800"
              height=""
              src="../assets/login-page.jpg"
              alt="learning man"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
