"use client";

import { useState } from "react";
import { StyleSheetManager, styled, css } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
max-width:100%;
max:height:200px;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
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

  border-radius: 5px;
  height: 40px;
  padding: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const BigImageWrapper = styled.div`
  text-align: center;
`;

const ProductImages = ({ images, title }) => {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>

      <ImageButtons>
        {images.map((image) => (
          <StyleSheetManager shouldForwardProp={isPropValid} key={image}>
            <ImageButton
              active={image === activeImage}
              onClick={() => setActiveImage(image)}
            >
              <Image src={image} alt={title} />
            </ImageButton>
          </StyleSheetManager>
        ))}
      </ImageButtons>
    </>
  );
};

export default ProductImages;
