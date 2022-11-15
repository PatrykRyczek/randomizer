import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: aliceblue;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Logo = styled.div`
  width: 30%;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 30%;

  .menus {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
}
`;
