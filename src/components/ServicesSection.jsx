import styled from "styled-components";
import readingbook from "../materials/readingbook.avif";

const ServicesMainSection = styled.div`
  width: 100%;
  padding: 4.688rem 0px;
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
`;

const H2 = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 2.188rem;
  margin: 0;
`;

function ServicesSection() {
  return (
    <ServicesMainSection>
      <ServicesSectionContainer>
        <H2>
          Let me help you <br /> skyrocket your social media presence
        </H2>
        <Services>
          <ImgBackground>
            <A href="">SOME MANAGEMENT</A>
          </ImgBackground>
          <ImgBackground>
            <A href="">FACEBOOK ADS</A>
          </ImgBackground>
          <ImgBackground>
            <A href="">COURSES</A>
          </ImgBackground>
        </Services>
      </ServicesSectionContainer>
    </ServicesMainSection>
  );
}

export default ServicesSection;
