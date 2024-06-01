import styled from "styled-components";
import AbbieImage from "../materials/readingbook.avif";
import testing from "../materials/testing.svg";
import NewImage from "../materials/Group10.svg";

const OtherAboutMeMainSection = styled.div`
  width: 100%;
  padding: 4.688rem 0px;
  position: relative;
  background-color: #faf7f2;
`;

const OtherAboutMeMainSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 75rem;
  margin: 0 auto;
`;

const LeftSide = styled.div`
  flex: 1;
  display: grid;
  justify-content: center;
  position: relative;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
`;

const Img = styled.img`
  width: 21.875rem;
  height: 28.125rem;
  border-radius: 48% 48% 0rem 0rem;
  object-fit: cover;
  border: 0.625rem solid #faded1;
  position: relative;
  z-index: 1;
`;

const H3 = styled.h3`
  font-weight: 600;
  font-size: 3.125rem;
  text-align: left;
  margin: 0;
`;

const H4 = styled.h4`
  font-weight: 400;
  text-align: left;
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
  align-self: flex-start;
  margin-top: 1.25rem;
`;

const Img2 = styled.img`
  left: 0;
  top: 0;
  position: absolute;
  z-index: 0;
`;

const Img3 = styled.img`
  bottom: 0;
  right: 0;
  margin-right: 3.125rem;
  position: absolute;
  z-index: 0;
`;

function OtherAboutMe() {
  return (
    <OtherAboutMeMainSection>
      <OtherAboutMeMainSectionContainer>
        <Img3 src={NewImage} alt="testing" />
        <LeftSide>
          <Img src={AbbieImage} alt="Abbie Image" />
          <Img2 src={testing} alt="testing" />
        </LeftSide>
        <RightSide>
          <H3>I'm Abbie, the founder of Social ME</H3>
          <H4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            maiores eligendi tempore voluptatem! Officiis illum ducimus sapiente
            quae optio, soluta, quaerat aliquid cum commodi praesentium earum
            dolor, inventore enim? Facilis? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Maxime quisquam fugit cum quam harum
            aliquid accusantium molestias sit debitis velit, commodi laboriosam
            magni ullam praesentium vero saepe iure. Id, saepe.
          </H4>
          <A href="www.gooogle.com">WHAT ARE YOU WAITING FOR ?</A>
        </RightSide>
      </OtherAboutMeMainSectionContainer>
    </OtherAboutMeMainSection>
  );
}

export default OtherAboutMe;
