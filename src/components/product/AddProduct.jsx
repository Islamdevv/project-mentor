import { Container } from "@mui/material";
import React from "react";
import Form from "../form/Form";

const AddProduct = () => {
  return (
    <Container>
      <Form isEdit={true} />
    </Container>
  );
};

export default AddProduct;
