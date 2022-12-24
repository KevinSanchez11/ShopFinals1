import styled from "styled-components";

export const AddButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 300px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.isInCart ? "#E55336" : "#60c95d")};
  padding: 5px;
  cursor: pointer;

  p {
    font-size: 25px;
    margin: 0;
    color: white;
  }
`;

export const Subtitle = styled.p`
  font-size: 13px;
  color: white;
  margin: -9px;
  margin-left: -1px;
  margin-top: 2px;
`;

export const Context = styled.p`
  font-style: normal;
  font-size: 13px;
  margin: 0;
  color: #ffffff;
  margin: 0px;
  margin-top: -10px;
`;

export const Wrapper = styled.div`
  display: grid;
  align-items: flex-end;
  width: 260px;
  height: 370px;
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: 300px;
  overflow: hidden;
  position: relative;
`;

export const TextContainer = styled.div`
  display: grid;
  gap: 10px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  width: 100%;
  padding: 20px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  margin: 0;
  font-weight: bold;
  color: #ffffff;
  margin: 0px;
`;
