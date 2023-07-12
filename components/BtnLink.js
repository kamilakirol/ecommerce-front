import Link from "next/link";
import { StyleSheetManager, styled } from "styled-components";
import { BtnStyle } from "./Btn";
import isPropValid from "@emotion/is-prop-valid";

const StyledLink = styled(Link)`
  ${BtnStyle}
`;

const BtnLink = (props) => {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledLink {...props} />
    </StyleSheetManager>
  );
};

export default BtnLink;
