import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function CarouselCard({image}) {
  return (
    <Card sx={{ maxWidth: "100%", backgroundColor: "#285cc4",
    height: "90vh", borderRight: 0 }}>
      <CardActionArea>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt="image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
