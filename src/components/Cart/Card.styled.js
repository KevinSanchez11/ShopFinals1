import styled from "styled-components";

export const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  color: white;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 18px;

  a {
    text-decoration: none;
    color: #0004ff;

    :hover {
      color: #00d9ff;
      font-weight: bold;
    }
  }
`;
