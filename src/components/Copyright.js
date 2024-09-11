import React from 'react'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
const Copyright = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: "text.primary",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright