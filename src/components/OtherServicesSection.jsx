import styled from "styled-components";
import Reading from "../materials/readingbook.avif";

const OtherServicesMainSection = styled.div`
  width: 100%;
  padding: 4.688rem 0px 0px;
`;

const OtherServicesSectionContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 3.125rem;
  border-bottom: 0.125rem solid black;
  padding-bottom: 4.688rem;
`;

const Img = styled.img`
  border-radius: 48% 48% 0rem 0rem;
  width: 100%;
  height: 25rem;
  object-fit: cover;
`;

const H3 = styled.h3`
  color: black;
  font-weight: 500;
  font-size: 1.563rem;
  margin: 0;
`;

const H4 = styled.h4`
  color: black;
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const A = styled.a`
  background-color: #ad9372;
  padding: 0.625rem 1.25rem;
  color: black;
  text-decoration: none;
  color: white;
`;

function OtherServicesSection() {
  return (
    <OtherServicesMainSection>
      <OtherServicesSectionContainer>
        <ImgDiv>
          <Img src={Reading}></Img>
          <H3>Portrait</H3>
          <H4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            nulla sunt odio pariatur ipsam animi nam laborum dolorum fuga, natus
            soluta eos inventore! Autem vero repellat beatae. Non, eligendi
            cupiditate?
          </H4>
          <A href="www.google.com">GET STARTED</A>
        </ImgDiv>
        <ImgDiv>
          <Img src={Reading}></Img>
          <H3>Commercial</H3>
          <H4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            nulla sunt odio pariatur ipsam animi nam laborum dolorum fuga, natus
            soluta eos inventore! Autem vero repellat beatae. Non, eligendi
            cupiditate?
          </H4>
          <A href="www.google.com">GET STARTED</A>
        </ImgDiv>
        <ImgDiv>
          <Img src={Reading}></Img>
          <H3>Elegant</H3>
          <H4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            nulla sunt odio pariatur ipsam animi nam laborum dolorum fuga, natus
            soluta eos inventore! Autem vero repellat beatae. Non, eligendi
            cupiditate?
          </H4>
          <A href="www.google.com">GET STARTED</A>
        </ImgDiv>
      </OtherServicesSectionContainer>
    </OtherServicesMainSection>
  );
}

export default OtherServicesSection;
