import styled from "styled-components";
import Facebook from "../materials/icons8-facebook (14).svg";
import Instagram from "../materials/icons8-instagram (16).svg";
import Youtube from "../materials/icons8-youtube (3).svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 1.563rem 0rem;
`;

const MainDiv = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const H3 = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
`;

const Ulist = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

const ContactDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
`;

const ContactButton = styled.a`
  background-color: black;
  padding: 0.625rem 1.25rem;
  text-decoration: none;
  color: white;
`;

const Img = styled.img`
  width: 1.563rem;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  align-items: center;
`;

const SocialMediaA = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <Container>
      <MainDiv>
        <H3>SOCIAL ME</H3>
        <div>
          <Ulist>
            <li>
              <StyledLink to="AboutUsPage">ABOUT US</StyledLink>
            </li>
            <li>
              <StyledLink to="Services">SERVICES</StyledLink>
            </li>
            <li>
              <StyledLink to="Course">COURSE</StyledLink>
            </li>
            <li>
              <StyledLink to="Blog">BLOG</StyledLink>
            </li>
          </Ulist>
        </div>
        <ContactDiv>
          <SocialMedia>
            <SocialMediaA href="instagram.com">
              <Img src={Instagram} alt="intagram" />
            </SocialMediaA>
            <SocialMediaA href="youtube.com">
              {" "}
              <Img src={Youtube} alt="youtube" />
            </SocialMediaA>
            <SocialMediaA href="facebook.com">
              {" "}
              <Img src={Facebook} alt="facebook" />
            </SocialMediaA>
          </SocialMedia>
          <ContactButton href="www.google.com">CONTACT</ContactButton>
        </ContactDiv>
      </MainDiv>
    </Container>
  );
}

export default Header;
