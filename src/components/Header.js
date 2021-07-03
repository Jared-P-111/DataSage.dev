import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  height: 100px;
  background-color: lightgray;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
`;

const Logo = styled(Link)`
  color: #fff;
  padding: 0.8rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 850px) {
    align-self: center;
    z-index: 1;
  }
`;

const NavItems = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  width: 800px;
  height: 70%;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    z-index: 999;
    background-color: transparent;
    border-radius: 10px;
    font-size: 0.8rem;
    margin-top: 0;
  }
`;

const NavbarLink = styled(Link)`
  color: #fff;
  font-size: 1.4em;
  text-decoration: none;
  text-transform: uppercase;
  /* background-color: ${(props) => props.color}; */
  z-index: 2;
  width: 20%;
  height: 100%;

  @media screen and (max-width: 500px) {
    padding: 0.2rem;
  }
`;

const NavbarSlider = styled.div`
  position: absolute;
  background-color: ${(props) => props.color};
  height: 100%;
  width: 80px;
  margin-left: 40px;
`;

const navObject = [
  { button: 'home', color: 'rgba(255,0,0,0.3)', to: '/', position: 0 },
  { button: 'media', color: 'rgba(0,255,0,0.3)', to: 'media', position: 160 },
  { button: 'models', color: 'rgba(0,0,255,0.3)', to: 'bpscore', position: 320 },
  { button: 'projects', color: 'rgba(255,0,255,0.3)', to: 'threecards', position: 480 },
  { button: 'story', color: 'rgba(255,255,0,0.3)', to: 'scenicodyssey', position: 640 },
];

const Header = () => {
  const [position, setPosition] = useState(0);
  const [color, setColor] = useState('');

  const adjustPosition = (e) => {
    console.log(e.target.id);
  };

  return (
    <Navbar>
      <Logo to="/">DataSage.dev</Logo>
      <NavItems>
        {navObject.map((obj) => {
          return (
            <NavbarLink
              to={obj.to}
              color={obj.color}
              key={obj.button}
              id={obj.position}
              onMouseEnter={adjustPosition}
              position={obj.position}
            >
              {obj.button}
            </NavbarLink>
          );
        })}
        <NavbarSlider position={position} />
      </NavItems>
    </Navbar>
  );
};

export default Header;
