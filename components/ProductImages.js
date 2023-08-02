"use client";

import { useState } from "react";
import { StyleSheetManager, styled, css } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Image from "next/image";

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
const ImageButton = styled.div`
  border: 2px solid #ccc;

  ${(props) =>
    props.active
      ? css`
          border-color: #ccc;
        `
      : css`
          border-color: transparent;
        `}

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  border-radius: 5px;
  height: 40px;
  width: 40px;
  padding: 3px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;

  img {
    object-fit: contain;
  }
`;

const BigImageWrapper = styled.div`
  text-align: center;
  position: relative;
  height: 200px;
  margin-bottom: 20px;

  img {
    object-fit: contain;
  }
`;

const ProductImages = ({ images, title }) => {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <Image
          src={activeImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, , (min-width: 767px) 50vw"
          priority
        />
      </BigImageWrapper>

      <ImageButtons>
        {images.map((image) => (
          <StyleSheetManager shouldForwardProp={isPropValid} key={image}>
            <ImageButton
              active={image === activeImage}
              onClick={() => setActiveImage(image)}
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 10vw"
              />
            </ImageButton>
          </StyleSheetManager>
        ))}
      </ImageButtons>
    </>
  );
};

export default ProductImages;
