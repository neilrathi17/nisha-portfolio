import React from "react";
import Navbar from '../components/Navbar'
import Appbar from "../components/Appbar";

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import Box from '@mui/material/Box';

import "animate.css/animate.compat.css"
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import ScrollAnimation from 'react-animate-on-scroll';
import aaure from "../images/canvas/Aaure.PNG"
import autumn from "../images/canvas/Autumn.PNG"
import image1 from "../images/canvas/IMG_0120.PNG"
import starfire from "../images/canvas/Starfire.PNG"
import image2 from "../images/canvas/IMG_0121.PNG"
import image3 from "../images/canvas/IMG_0123.PNG"
import nightwalk from "../images/canvas/Nightwalk.PNG"
import image4 from "../images/canvas/IMG_0124.PNG"
import image5 from "../images/canvas/IMG_0125.PNG"
import image6 from "../images/canvas/IMG_0129.PNG"
import image7 from "../images/canvas/IMG_0130.PNG"
import image8 from "../images/canvas/IMG_0131.PNG"
import image9 from "../images/canvas/IMG_0133.PNG"
import image10 from "../images/canvas/IMG_0134.PNG"
import { ThemeProvider } from "@emotion/react";

<style>
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
</style>

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const fonttheme = createTheme({
  typography: { fontFamily: ["cedarville-cursive-regular", "regular"].join(",") }
});

const paintings=[
    {
        name : "Azure",
        image : aaure
    },
        {
        name : "Autmn",
        image : autumn
        },
        {
            name : "Starfire",
            image : starfire
        },
        {
          name : "Nightwalk",
          image : nightwalk
          },
        {
            name : "mural 4",
            image : image1
        },
        {
            name : "mural 3",
            image : image2
        },
        {
            name : "mural 3",
            image : image3
        },
                {
            name : "mural 3",
            image : image4
        },
        {
          name : "mural 3",
          image : image5
      },
      {
        name : "mural 3",
        image : image6
    },
    {
      name : "mural 3",
      image : image7
  },
  {
    name : "mural 3",
    image : image8
},
{
  name : "mural 3",
  image : image9
},
{
  name : "mural 3",
  image : image10
},


]




const Canvas = () =>{

    return(
        <div>
{/* <Navbar/> */}
<Appbar/>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                // minHeight="100vh"
                >

                  <Typography variant="h2" component="h2" color='secondary' alignContent='center' margin={"20px"} fontStyle={"cursive"} fontFamily={'roboto'}>
            Canvas
            </Typography>


            </Box>

            <Box component="div">


      

      <ThemeProvider theme={darkTheme}>
      <Grid container justify="center" container spacing ={5} sx={{paddingLeft :10, paddingRight :10 }}>
        {/* Projects */}
        {paintings.map((project, i) => (
          
          <Grid item xs={12} sm={12} md={4} key={i}>
            <ScrollAnimation animateIn="fadeIn" animatePreScroll={true} initiallyVisible={true} animateOnce={true}>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"

                  height="550"
                  image={project.image}
                />
                {/* <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent> */}

              </CardActionArea>
              <Typography variant="h6" component="h6" color='secondary' alignContent='center' fontFamily={'roboto'} paddingLeft={'10px'}>
            {project.name}  
            </Typography>
            </Card>
            </ScrollAnimation>

          </Grid>

        ))}
      </Grid>
        </ThemeProvider>
    </Box>


        </div>
       
    )
}

export default Canvas