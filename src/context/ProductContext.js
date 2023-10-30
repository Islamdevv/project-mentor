import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTION_PRODUCT, API_PRODUCTS } from "../helpers/const";
import { useLocation, useNavigate } from "react-router-dom";

const INIT_STATE = {
  product: [],
  oneProduct: null,
  productsTotalCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_PRODUCT.GET_PRODUCTS:
      return {
        ...state,
        product: action.payload.data,
        productsTotalCount: action.payload.headers["x-total-count"],
      };
    case ACTION_PRODUCT.GET_ONE_PRODUCTS:
      return { ...state, oneProduct: action.payload };

    default:
      return state;
  }
};

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createProduct(newProduct) {
    try {
      await axios.post(API_PRODUCTS, newProduct);
    } catch (error) {
      console.log("error");
    }
  }

  async function getProduct() {
    try {
      let res = await axios(`${API_PRODUCTS}/${window.location.search}`);
      console.log(window.location);
      dispatch({ type: ACTION_PRODUCT.GET_PRODUCTS, payload: res });
    } catch (error) {
      console.log("error");
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API_PRODUCTS}/${id}`);
      getProduct();
    } catch (error) {
      console.log("error");
    }
  }

  async function getOneProduct(id) {
    try {
      let { data } = await axios(`${API_PRODUCTS}/${id}`);
      dispatch({ type: ACTION_PRODUCT.GET_ONE_PRODUCTS, payload: data });
    } catch (error) {
      console.log("error");
    }
  }

  async function editProduct(newProduct) {
    try {
      await axios.patch(`${API_PRODUCTS}/${newProduct.id}`, newProduct);
      getProduct();
    } catch (error) {
      console.log("error");
    }
  }

  function fetchByParams(quary, value) {
    const filterSerarchParams = new URLSearchParams(location.search);
    if (value === "all") {
      filterSerarchParams.delete(quary);
    } else {
      filterSerarchParams.set(quary, value);
    }
    const url = `${location.pathname}?${filterSerarchParams.toString()}`;
    navigate(url);
  }

  const values = {
    fetchByParams,
    createProduct,
    getProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
    product: state.product,
    oneProduct: state.oneProduct,
    productsTotalCount: state.productsTotalCount,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
