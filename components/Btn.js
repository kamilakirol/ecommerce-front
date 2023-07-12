import { StyleSheetManager, css, styled } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { primary } from "@/lib/colors";

export const BtnStyle = css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: semi-bold;
  svg {
    height: 16px;
    margin-right: 5px;
  }

  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}
${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: ${primary};
      color: #fff;
      border: 1px solid ${primary};
    `}
    ${(props) =>
    props.primary &&
    props.outline &&
    css`
      background-color: transparent;
      color: ${primary};
      border: 1px solid ${primary};
    `}
${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
`;

const StyledBtn = styled.button`
  ${BtnStyle}
`;

const Btn = ({ children, ...rest }) => {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledBtn {...rest}>{children}</StyledBtn>
    </StyleSheetManager>
  );
};

export default Btn;
