import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ProTip from "./components/ProTip";
import Copyright from "./components/Copyright";
import { red, orange} from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import {
  Button,
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
  AppBar as MuiAppBar,
} from "@mui/material";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 20
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "400px",
  margin: "auto",
  padding: theme.spacing(2),
  border: "1px solid #ccc",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));
const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
export default function App() {
   
  const theme = createTheme({
     spacing: 10,
     palette: {
       primary: {
          main: orange[500]
       },
       customRibRed: {
         main: red[400],
         superDark: red[800],
         superLight: red[100],
       },
     },
     typography: {
       myVariant: {
         fontSize: "2rem",
       },
     },
   });
  return (
    <>
      <AppBar position="static">MUI Themes</AppBar>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
              Material UI Theme demo
            </Typography>
          </Box>
          <ProTip />
        </Container>
        <FormContainer>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <SubmitButton variant="contained" color="primary" fullWidth>
            Submit
          </SubmitButton>
        </FormContainer>
        <Box sx={{marginTop:2}}>
          <Copyright />
        </Box>
      </ThemeProvider>
    </>
  );
}
