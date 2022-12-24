import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Arial";
  margin: 40px;
  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

export const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #0004ff;

    :hover {
      color: #00d9ff;
      font-weight: bold;
    }
  }
`;
