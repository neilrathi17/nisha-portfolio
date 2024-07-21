import React from "react";
import Navbar from '../components/Navbar'
import Appbar from "../components/Appbar"
import Footer from "../components/Footer"
import { Container } from "@mui/material";
import Image from "../components/Image";

import Box from '@mui/material/Box';

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import image1 from "../images/mural/IMG_0122.PNG"
import image2 from "../images/mural/IMG_0127.PNG"
import image3 from "../images/mural/IMG_0128.PNG"
import image4 from "../images/mural/Baloo.PNG"
import image5 from "../images/mural/Sea_Monster.PNG"
import image6 from "../images/mural/La_Villa.png"



const paintings=[
    {
        name : "Golden Leaves",
        image : image1
    },
        {
        name : "Tropical Leaves",
        image : image2
        },
        {
            name : "Family",
            image : image3
        },
        {
          name:"Baloo",
          image:image4
        },
        {
          name:"La Vila",
          image:image6
        },
        {
          name:"Sea Monster",
          image:image5
        }

]

const Murals = () =>{

    return(
        <div>
            <Appbar/>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                // minHeight="100vh"
                >
            <Typography variant="h2" component="h2" color='secondary' alignContent='center' margin={"20px"} fontStyle={"cursive"} fontFamily={'roboto'}>
            Mural
            </Typography>
            </Box>

      <Container maxWidth={false}>
      <Grid container justify="center" container spacing ={8} sx={(theme) => ({
            [theme.breakpoints.only("xs")]: {
              paddingLeft:"15px !important",
              paddingRight:"15px !important"
            }
          })}>
        {/* Projects */}
        {paintings.map((project, i) => (
          <Grid item xs={12} sm={12} md={4} key={i}>
            <Card >
              <CardActionArea>
                <Image src={project.image} border={true} zoom={true} style={{height:"600px"}}></Image>

              </CardActionArea>
              <Typography variant="h6" component="h6" color='secondary' alignContent='center' fontFamily={'roboto'} paddingLeft={'10px'}>
            {project.name}
            </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
           

        <Footer/>
        </div>
       
    )
}

export default Murals

