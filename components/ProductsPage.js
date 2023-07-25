"use client";

import { styled } from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";

const Title = styled.h1`
  font-size: 1.5em;
`;

const ProductsPage = ({ products }) => {
  return (
    <Center>
      <Title>All Products</Title>
      <ProductsGrid products={products} />
    </Center>
  );
};

export default ProductsPage;
