import { styled } from "styled-components";

const StyledTabel = styled.table`
  width: 100%;
  th {
    text-align: left;
    text-transform: uppercase;
    color: #ccc;
    font-weight: 600;
    font-size: 0.7rem;
  }
`;

const Tabel = (props) => {
  return <StyledTabel {...props} />;
};

export default Tabel;
