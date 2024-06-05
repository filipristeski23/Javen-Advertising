import styled from "styled-components";
import readingbook from "../materials/readingbook.avif";
import Decoration from "../materials/Group3.svg";

const ServicesMainSection = styled.div`
  width: 100%;
  padding: 4.688rem 0px;
  position: relative;
  background-color: #faf7f2;
`;

const ServicesSectionContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const ImgBackground = styled.div`
  background-image: url(${readingbook});
  flex: 1;
  border-radius: 48% 48% 0rem 0rem;
  height: 28.125rem;
  display: grid;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  z-index: 2;
`;

const Services = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.875rem;
`;

const A = styled.a`
  background-color: #e8c990;
  padding: 0.625rem 1.25rem;
  color: black;
  text-decoration: none;
  margin-top: 3.125rem;
  font-weight: 500;
  z-index: 2;
  text-align: center;
`;

const H2 = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 2.188rem;
  margin: 0;
  z-index: 2;
`;

const Img3 = styled.img`
  left: 0;
  position: absolute;
  z-index: 0;
`;

function ServicesSection() {
  return (
    <ServicesMainSection>
      <Img3 src={Decoration} alt="Decoration" />
      <ServicesSectionContainer>
        <H2>Нашите Главни Цели</H2>
        <Services>
          <ImgBackground>
            <A href="">
              Подигање на свеста за <br /> значењето на женското претприемништво
            </A>
          </ImgBackground>
          <ImgBackground>
            <A href="">
              Намалување на невработеноста <br /> кај жените
            </A>
          </ImgBackground>
          <ImgBackground>
            <A href="">
              Зајакнување на соработката и <br /> мрежите за поддршка
            </A>
          </ImgBackground>
        </Services>
      </ServicesSectionContainer>
    </ServicesMainSection>
  );
}

export default ServicesSection;
