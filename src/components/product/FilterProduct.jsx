import {
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useProducts } from "../../context/ProductContext";

const FilterProduct = () => {
  const { fetchByParams } = useProducts();

  return (
    <Paper
      sx={{
        position: "absolute",
        mt: 10,
        p: 2,
        boxShadow: "0",
        backgroundColor: "transparent",
      }}
    >
      <FormControl>
        <RadioGroup
          defaultValue="all"
          onChange={(e) => fetchByParams("category", e.target.value)}
          name="radio-buttons-group"
          sx={{ my: 1 }}
        >
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="All"
          ></FormControlLabel>
          <FormControlLabel
            value="iphone"
            control={<Radio />}
            label="iPhone"
          ></FormControlLabel>
          <FormControlLabel
            value="mac"
            control={<Radio />}
            label="Mac"
          ></FormControlLabel>
          <FormControlLabel
            value="plants"
            control={<Radio />}
            label="Plants"
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default FilterProduct;
