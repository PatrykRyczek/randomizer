import styled from "styled-components";

export const Container = styled.div`
  font-size: 26px;
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
    margin: 15px;
    line-height: 30px;
    width: 200px;
  }

  span {
    margin: 15px 0;
  }
  input,
  select {
    margin-top: 25px;
  }
`;
