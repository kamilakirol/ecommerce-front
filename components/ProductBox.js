import { styled } from "styled-components";
import Btn from "./Btn";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: relative;

  img {
    object-fit: contain;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
  text-decoration: none;
  color: inherit;
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
`;

const PriceRow = styled.div`
  display: block;
  align-items: center;
  margin-top: 5px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 10px;
  }
`;

const Price = styled.div`
  font-size: 1 rem;
  font-weight: bold;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2 rem;
    font-weight: bold;
    text-align: left;
  }
`;

const ProductBox = ({ _id, title, description, price, images }) => {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;
  return (
    <div>
      <WhiteBox href={url}>
        <ImgWrapper>
          <Image
            src={images?.[0]}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw"
          />
        </ImgWrapper>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Btn onClick={() => addProduct(_id)} primary outline block>
            Add to cart
          </Btn>
        </PriceRow>
      </ProductInfoBox>
    </div>
  );
};

export default ProductBox;
