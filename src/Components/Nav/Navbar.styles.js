import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 70px;
  width: 100%;
  background-color: #7c7287;
  font-size: 25px;

  a {
    text-decoration: none;
    color: white;
  }
`;

export const Logo = styled.div`
  width: 30%;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 70%;
  padding-right: 100px;

  .menus {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
  }

  .menu-items button {
    font-size: 18px;
    margin: 0 15px;
  }

  .menu-items a {
    color: black;
    padding: 5px;
    font-size: 16px;
  }

  .menu-items a:hover {
    background-color: #aaa;
  }
`;
