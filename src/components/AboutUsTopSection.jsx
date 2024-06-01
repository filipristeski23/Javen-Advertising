import styled from "styled-components";
import Reading from "../materials/readingbook.avif";
import Rectangle from "../materials/Rectangle.svg";
import Rectangle4 from "../materials/Rectangle4.svg";

const AboutUsTopSectionMain = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.688rem;
  padding-bottom: 4.688rem;
  background-color: #ebe7dc;
  position: relative;
`;

const TopDiv = styled.div`
  width: 100%;
  height: 31.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3.125rem;
  background: linear-gradient(to bottom, white 50%, #ebe7dc 50%);
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.563rem;
  z-index: 3;
`;

const H3 = styled.h3`
  color: black;
  margin: 0;
  font-size: 2.188rem;
  max-width: 60%;
  text-align: center;
  font-weight: 500;
`;

const H4 = styled.h4`
  color: black;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 400;
  max-width: 60%;
  text-align: center;
`;

const Div = styled.div`
  flex: 1;
  position: relative;
`;

const MiddleDiv = styled.div`
  flex: 1;
  background-image: url(${Reading});
  background-position: center;
  background-size: cover;
`;

const RightDiv = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Img = styled.img`
  width: 50%;
  height: 85%;
  object-fit: cover;
`;

const RightImg = styled.img`
  position: relative;
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

const LeftAbsoluteImg = styled.img`
  position: absolute;
  width: 12.5rem;
  height: 18.75rem;
  transform: translate(-50%, -50%);
  top: 40%;
  object-fit: cover;
`;

const RightAbsoluteImg = styled.img`
  position: absolute;
  width: 3.125rem;
  height: 18.75rem;
  object-fit: cover;
  top: 20%;
`;

const Img3 = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 3rem;
  z-index: 2;
`;

const Img4 = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

function AboutUsTopSection() {
  return (
    <AboutUsTopSectionMain>
      <Img3 src={Rectangle} alt="Decoration" />
      <Img4 src={Rectangle4} alt="Decoration" />
      <TopDiv>
        <Div>
          <Img src={Reading} alt="" />
          <LeftAbsoluteImg src={Reading} alt="" />
        </Div>
        <MiddleDiv></MiddleDiv>
        <RightDiv>
          <RightImg src={Reading} alt="" />
          <RightAbsoluteImg src={Reading} alt="" />
        </RightDiv>
      </TopDiv>
      <BottomDiv>
        <H4>SOME TEXT</H4>
        <H3>A SIMPLE PHRASE ABOUT YOUR BUSINESS WORKING HOURS</H3>
        <H4>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          eveniet deserunt architecto.
        </H4>
      </BottomDiv>
    </AboutUsTopSectionMain>
  );
}

export default AboutUsTopSection;
