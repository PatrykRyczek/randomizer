import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 60px);
  width: 100%;
  color: black;
  background-color: #f0f8ff;
  padding: 0 25px;

  button {
    line-height: 30px;
    width: 200px;
  }
`;
