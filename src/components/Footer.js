import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box style={{marginTop:"20px"}}
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
        p: 6,
      }}
    >
      <Container maxWidth="lg" >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom align="center">
              About Me
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              I am Nisha Rathi, an engineering student with a passion for fine arts both on cavas and on walls!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom align="center">
              Contact me
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              For commissions/requests or purchases:
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Email: 17nisharathi@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Phone: +91 9591058264
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom align="center">
              Follow Me
            </Typography >
            {/* <Link href="https://www.facebook.com/" color="inherit" align="center"> 
              <Facebook />
            </Link> */}
            <Typography align="center">
            <Link
              href="https://www.instagram.com/nishahappened?igsh=MTB1cXZ5bHNtMDZqbw== "
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>

            </Typography>
   

          </Grid>
        </Grid>
        {/* <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
}