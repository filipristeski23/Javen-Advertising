import styled from "styled-components";
import Reading from "../materials/readingbook.avif";

const MainSection = styled.div`
  width: 100%;
  padding: 3.125rem 0px;
  padding-bottom: 4.688rem;
`;

const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 75rem;
  margin: 0 auto;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;
`;

const RightSide = styled.div`
  flex: 1;
  margin-left: 7.5rem;
`;

const Img = styled.img`
  width: 21.875rem;
  height: 28.125rem;
  border-radius: 48% 48% 0rem 0rem;
  object-fit: cover;
`;

const H3 = styled.h3`
  font-weight: 600;
  font-size: 3.125rem;
  text-align: right;
  margin: 0;
`;

const H4 = styled.h4`
  font-weight: 400;
  text-align: right;
  font-size: 1rem;
  margin: 0;
  margin-top: 0.625rem;
`;

const A = styled.a`
  background-color: black;
  padding: 0.625rem 1.25rem;
  text-decoration: none;
  color: white;
  display: inline-block;
  align-self: flex-end;
  margin-top: 1.25rem;
`;

function FirstSection() {
  return (
    <MainSection>
      <MainSectionContainer>
        <LeftSide>
          <H3>I'm here to shine up your social media</H3>
          <H4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            maiores eligendi tempore voluptatem! Officiis illum ducimus sapiente
            quae optio, soluta, quaerat aliquid cum commodi praesentium earum
            dolor, inventore enim? Facilis?
          </H4>
          <A href="www.gooogle.com">WHEN DO WE START?</A>
        </LeftSide>
        <RightSide>
          <Img src={Reading} alt="Reading Book" />
        </RightSide>
      </MainSectionContainer>
    </MainSection>
  );
}

export default FirstSection;
