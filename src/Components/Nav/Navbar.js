import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../menuItems";
import MenuItems from "../Menuitems/MenuItems";
import { Container, Logo, Menu } from "./Navbar.styles";

export const Navbar = () => {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <span>rand()mizer</span>
        </Link>
      </Logo>
      <Menu>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
        </ul>
      </Menu>
    </Container>
  );
};
