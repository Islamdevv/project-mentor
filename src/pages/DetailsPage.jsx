import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
const DetailsPage = () => {
  const { getOneProduct, oneProduct } = useProducts();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "70vh",
        alignItems: "center",
      }}
    >
      {oneProduct ? (
        <Card sx={{ width: 545, textAlign: "center" }}>
          <CardMedia
            sx={{ height: 300 }}
            image={oneProduct.picture}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {oneProduct.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {oneProduct.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Basket</Button>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default DetailsPage;
