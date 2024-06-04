import styled from "styled-components";
import Facebook from "../materials/icons8-facebook (14).svg";
import Instagram from "../materials/icons8-instagram (16).svg";
import Youtube from "../materials/icons8-youtube (3).svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 1.563rem 0rem;
  z-index: 1;
`;

const MainDiv = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 2;
`;

const H3 = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
  z-index: 4;
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
  z-index: 4;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  z-index: 4;
`;

const ContactDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  z-index: 4;
`;

const ContactButton = styled.a`
  background-color: black;
  padding: 0.625rem 1.25rem;
  text-decoration: none;
  color: white;
  z-index: 4;
`;

const Img = styled.img`
  width: 1.563rem;
  z-index: 4;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  align-items: center;
  z-index: 4;
`;

const SocialMediaA = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const Li = styled.li`
  z-index: 4;
`;

function Header() {
  return (
    <Container>
      <MainDiv>
        <H3>SOCIAL ME</H3>
        <div>
          <Ulist>
            <Li>
              <StyledLink to="AboutUsPage">ABOUT US</StyledLink>
            </Li>
            <Li>
              <StyledLink to="Services">SERVICES</StyledLink>
            </Li>
            <Li>
              <StyledLink to="Course">COURSE</StyledLink>
            </Li>
            <Li>
              <StyledLink to="Blog">BLOG</StyledLink>
            </Li>
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
          <ContactButton href="www.google.com">Контактирај не</ContactButton>
        </ContactDiv>
      </MainDiv>
    </Container>
  );
}

export default Header;
