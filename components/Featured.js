import { styled } from "styled-components";
import Center from "./Center";
import PrimaryBtn from "./PrimaryBtn";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
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

const Featured = () => {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>Pro anywhere</Title>
              <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Desc>
              <PrimaryBtn size="l">Read more</PrimaryBtn>
              <PrimaryBtn size="l">Add to cart</PrimaryBtn>
            </div>
          </Column>
          <Column>
            <img
              src="https://kamila-next-ecommerce.s3.amazonaws.com/1687518121136.jpg"
              alt="macbookpro"
            />
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
};

export default Featured;
