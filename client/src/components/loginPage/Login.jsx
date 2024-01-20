import { Box, Typography, useTheme } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  // const red = theme.palette.extra.red;

  return (
    <Box>
      <Box
        m="2rem auto"
        width="100%"
        padding="2rem 15%"
        display="flex"
        justifyContent="space-between"
      >
        <Box width="35%" marginLeft="5rem">
          <Typography
            paddingLeft="3rem"
            variant="h3"
            // color={red}
            fontWeight="300"
          >
            Welcome to your professional community
          </Typography>

          <Box
            width="40vh"
            p="2rem"
            m="2rem 3rem"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
          >
            <Form />
          </Box>
        </Box>

        <Box width="50%">
          <Box width="50px" height="50px" marginTop="5rem">
            <img
              borderRadius="1.5rem"
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
