"use client";

import Center from "@/components/Center";
import Title from "@/components/Title";
import { styled } from "styled-components";
import WhiteBox from "./WhiteBox";
import ProductImages from "./ProductImages";
import Btn from "./Btn";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  margin-top: 40px;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`;

const ProductPageContent = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  return (
    <Center>
      <ColWrapper>
        <WhiteBox>
          <ProductImages images={product.images} title={product.title} />
        </WhiteBox>

        <div>
          <Title>{product.title}</Title>
          <p>{product.description}</p>
          <PriceRow>
            <div>
              <Price>${product.price}</Price>
            </div>
            <div>
              <Btn primary onClick={() => addProduct(product._id)}>
                <CartIcon />
                Add to cart
              </Btn>
            </div>
          </PriceRow>
        </div>
      </ColWrapper>
    </Center>
  );
};

export default ProductPageContent;