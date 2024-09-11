import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#ff8033",
    },
    error: {
      main: red.A400,
    },
    shape: {
      borderRadious: 2
    }
  },
});

export default theme;
