import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  height: 60px;
  background: transparent;
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #fff;
  padding: 0.8rem;
  margin-top: 1rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const NavItems = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.8);

  &:nth-child(1) {
    border-radius: 10px 0px 0px 10px;
    &:hover {
      background-color: rgb(181, 101, 29, 0.8);
      transition: 0.3s;
    }
  }
  &:nth-child(2) {
    &:hover {
      background-color: rgba(0, 200, 80, 0.8);
      transition: 0.3s;
    }
  }
  &:nth-child(3) {
    &:hover {
      background-color: rgba(200, 0, 0, 0.8);
      transition: 0.3s;
    }
  }
  &:nth-child(4) {
    &:hover {
      background-color: rgba(0, 200, 200, 0.8);
      transition: 0.3s;
    }
  }

  &:nth-child(5) {
    border-radius: 0px 10px 10px 0px;
    &:hover {
      background-color: rgba(150, 0, 255, 0.8);
      transition: 0.3s;
    }
  }
`;

const Header = () => {
  return (
    <Navbar>
      <Logo to="/">DataSage.dev</Logo>
      <NavItems>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/natours">Natours</NavbarLink>
        <NavbarLink to="/bpscore">BP Score</NavbarLink>
        <NavbarLink to="/threecards">3 Cards</NavbarLink>
        <NavbarLink to="/scenicodyssey">Scenic Odyssey</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default Header;
