"use client";

import Link from "next/link";
import { css, styled } from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/BarsIcon";

const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
  display: block;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavBtn = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"} onClick={() => setMobileNavActive(false)}>
              Home
            </NavLink>
            <NavLink
              href={"/products"}
              onClick={() => setMobileNavActive(false)}
            >
              All products
            </NavLink>
            <NavLink
              href={"/categories"}
              onClick={() => setMobileNavActive(false)}
            >
              Categories
            </NavLink>
            <NavLink
              href={"/account"}
              onClick={() => setMobileNavActive(false)}
            >
              Account
            </NavLink>
            <NavLink href={"/cart"} onClick={() => setMobileNavActive(false)}>
              Cart ({cartProducts?.length})
            </NavLink>
          </StyledNav>
          <NavBtn onClick={() => setMobileNavActive(!mobileNavActive)}>
            <BarsIcon />
          </NavBtn>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

export default Header;
