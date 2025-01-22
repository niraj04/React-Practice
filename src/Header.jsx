import React from 'react';
import styled from 'styled-components';

// Styled component for the header container
const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Styled component for the logo/text
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

// Styled component for navigation links
const NavLinks = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-right: 15px;
  }

  a {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;

    &:hover {
      color: #ddd;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Your Logo</Logo>
      <NavLinks>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
