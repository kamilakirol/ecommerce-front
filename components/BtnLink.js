import Link from "next/link";
import { styled } from "styled-components";
import { BtnStyle } from "./Btn";

const StyledLink = styled(Link)`
  ${BtnStyle}
`;

const BtnLink = (props) => {
  return <StyledLink {...props} />;
};

export default BtnLink;
