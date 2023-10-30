import { Container } from "@mui/material";
import React from "react";
import Form from "../form/Form";

const EditProduct = () => {
  return (
    <Container>
      <Form isEdit={false} />
    </Container>
  );
};

export default EditProduct;
