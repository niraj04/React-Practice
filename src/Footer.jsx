import React from 'react';
import styled from 'styled-components';

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #444;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 10px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #fff;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 5px 0;

      a {
        color: #aaa;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 15px;

  a {
    margin: 0 10px;
    color: #aaa;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 20px;
  font-size: 0.9rem;

  p {
    margin: 0;
    color: #aaa;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterSection>
          <h3>About Us</h3>
          <p>
            We are dedicated to providing the best services to our customers. 
            Learn more about our journey and values.
          </p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Follow Us</h3>
          <SocialLinks>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </SocialLinks>
        </FooterSection>
      </FooterTop>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
