import styled from "styled-components";
import Instagram from "../materials/icons8-instagram (16).svg";
import Facebook from "../materials/icons8-facebook (14).svg";

const FooterSection = styled.div`
  width: 100%;
`;

const FooterSectionContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0px;
  border-top: 1px solid black;
  gap: 1rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Img = styled.img`
  width: 30px;
`;

const H4 = styled.h4`
  color: black;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
`;

function Footer() {
  return (
    <FooterSection>
      <FooterSectionContainer>
        <Div>
          <a href="www.instagram.com">
            <Img src={Instagram} alt="instagram" />
          </a>
          <a href="www.facebook.com">
            <Img src={Facebook} alt="facebook" />
          </a>
        </Div>
        <H4>Website Developed By : Filip Risteski / Javen Advertising 2024</H4>
      </FooterSectionContainer>
    </FooterSection>
  );
}

export default Footer;
