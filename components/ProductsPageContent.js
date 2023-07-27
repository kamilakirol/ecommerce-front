"use client";

import Center from "./Center";
import ProductsGrid from "./ProductsGrid";
import Title from "./Title";

const ProductsPageContent = ({ products }) => {
  return (
    <Center>
      <Title>All Products</Title>
      <ProductsGrid products={products} />
    </Center>
  );
};

export default ProductsPageContent;
