import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Typography } from "antd";

const init = {
  title: "",
  description: "",
  category: "",
  price: "",
  picture: "",
};

const Form = ({ isEdit }) => {
  const { createProduct, oneProduct, getOneProduct, editProduct } =
    useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState(init);

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }

  function addProduct() {
    createProduct(product);
    setProduct(init);
  }

  function saveEditedProduct() {
    for (let i in product) {
      if (!product[i]) {
        console.log("error");
      }
    }
    editProduct(product);
  }

  return (
    <FormControl sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        align="center"
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height: "70vh",
          display: "flex",
          marginBottom: "0px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {isEdit ? (
          <Typography
            sx={{
              color: "#181818",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            ADD PRODUCT
          </Typography>
        ) : (
          <Typography
            sx={{
              color: "#181818",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            EDIT PRODUCT
          </Typography>
        )}
        <Box
          sx={{
            width: "60vw",
            margin: "3vh auto 10vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "15px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <TextField
            onChange={handleInp}
            value={product.title}
            sx={{
              borderColor: "white",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            fullWidth
            label="Title"
            variant="outlined"
            name="title"
            size="small"
          />

          <TextField
            onChange={handleInp}
            value={product.description}
            sx={{
              borderColor: "black",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            fullWidth
            label="Description"
            variant="outlined"
            name="description"
            size="small"
          />

          <TextField
            onChange={handleInp}
            value={product.picture}
            sx={{
              borderColor: "black",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            fullWidth
            label="Picture"
            variant="outlined"
            name="picture"
            size="small"
          />

          <TextField
            onChange={handleInp}
            value={product.price}
            sx={{
              borderColor: "black",
              backgroundColor: "white",
              borderRadius: "4px",
              width: "100%",
            }}
            fullWidth
            label="Price"
            variant="outlined"
            name="price"
            size="small"
          />
          <TextField
            onChange={handleInp}
            value={product.category}
            sx={{
              borderColor: "black",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            fullWidth
            label="Category"
            variant="outlined"
            name="category"
            size="small"
          />

          {isEdit ? (
            <Button
              onClick={addProduct}
              sx={{
                borderColor: "black",
                backgroundColor: "black",
                color: "white",
                transition: "1000s",
                gridColumn: "1/3",
              }}
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
            >
              Add Courses
            </Button>
          ) : (
            <Button
              sx={{
                borderColor: "black",
                backgroundColor: "black",
                color: "white",
                transition: "1000s",
                gridColumn: "1/3",
              }}
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
            >
              Save change
            </Button>
          )}
        </Box>
      </Box>
    </FormControl>
  );
};

export default Form;
