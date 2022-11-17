import styled from "styled-components";
import img from "../../images/numbers.png";
import dice from "../../images/dice.png";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: calc(100vh - 130px);
  width: 100%;
  color: black;
  background-color: #f0f8ff;
  padding: 0 25px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  height: 40%;
  margin-top: 50px;

  h3 {
    font-weight: normal;
  }

  p {
    margin: 0 auto;
    width: 80%;
  }
`;

export const Random = styled.div`
  display: flex;
  height: 40%;
  margin-top: 50px;
`;

export const Left = styled.div`
  padding: 10px 25px;
  width: 50%;
  height: 100%;
`;

export const Img = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Img2 = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${dice});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;
