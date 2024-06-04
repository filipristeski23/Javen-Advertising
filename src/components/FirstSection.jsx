import styled from "styled-components";
import Reading from "../materials/readingbook.avif";
import Header from "./Header";
import FirstSectionDecoration1 from "../materials/FirstSectionDecoration1.svg";
import SecondSectionDecoration from "../materials/Decoration4.svg";

const MainSection = styled.div`
  width: 100%;
  padding-bottom: 4.688rem;
  position: relative;
  background-color: #faf7f2;
  z-index: 1;
`;

const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 75rem;
  margin: 0 auto;
  z-index: 2;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;
  z-index: 4;
`;

const RightSide = styled.div`
  flex: 1;
  margin-left: 7.5rem;
  z-index: 4;
`;

const Img = styled.img`
  width: 21.875rem;
  height: 28.125rem;
  border-radius: 48% 48% 0rem 0rem;
  object-fit: cover;
  z-index: 4;
`;

const H3 = styled.h3`
  font-weight: 600;
  font-size: 3.125rem;
  text-align: right;
  margin: 0;
  z-index: 4;
`;

const H4 = styled.h4`
  font-weight: 400;
  text-align: right;
  font-size: 1rem;
  margin: 0;
  margin-top: 0.625rem;
  z-index: 4;
`;

const A = styled.a`
  background-color: black;
  padding: 0.625rem 1.25rem;
  text-decoration: none;
  color: white;
  display: inline-block;
  align-self: flex-end;
  margin-top: 1.25rem;
  z-index: 4;
`;

const Img3 = styled.img`
  top: 0;
  right: 0;
  margin-right: 7.5rem;
  position: absolute;
  z-index: 3;
`;

const Img4 = styled.img`
  bottom: 0;
  left: 0;
  position: absolute;
  z-index: 3;
`;

function FirstSection() {
  return (
    <MainSection>
      <Img3 src={FirstSectionDecoration1} alt="Decoration" />
      <Img4 src={SecondSectionDecoration} alt="Decoration" />
      <Header />
      <MainSectionContainer>
        <LeftSide>
          <H3>Изградба на Светла Иднина во Битола</H3>
          <H4>
            Добредојдовте во срцето на женското претприемништво во Битола. Ние
            сме посветени на создавање, поддршка и промовирање на динамична
            заедница на женски претприемачи.
          </H4>
          <A href="www.gooogle.com">Контактирај не</A>
        </LeftSide>
        <RightSide>
          <Img src={Reading} alt="Reading Book" />
        </RightSide>
      </MainSectionContainer>
    </MainSection>
  );
}

export default FirstSection;
