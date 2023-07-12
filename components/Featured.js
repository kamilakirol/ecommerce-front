"use client";

import { styled } from "styled-components";
import Center from "./Center";
import Btn from "./Btn";
import BtnLink from "./BtnLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const BtnsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const Featured = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>

              <BtnsWrapper>
                <BtnLink
                  href={"/products/" + product._id}
                  outline={1}
                  white={1}
                >
                  Read more
                </BtnLink>
                <Btn white onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Btn>
              </BtnsWrapper>
            </div>
          </Column>
          <Column>
            <img
              src="https://kamila-next-ecommerce.s3.amazonaws.com/1687518121136.jpg"
              alt="macbookpro"
            />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
};

export default Featured;
